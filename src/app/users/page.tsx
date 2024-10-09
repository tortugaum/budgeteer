'use client';
import { useEffect, useState } from 'react';
import GlobalStyle from '@/utils/GlobalStyle';
import {
  FormContainer,
  FormInput,
  UsersPageContainer,
  Title,
  UserTable,
  TableHeader,
  TableCell,
  Button,
} from './styles';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/themes';
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    email: '',
    password: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      await updateUser();
    } else {
      await createUser();
    }
    resetForm();
    fetchUsers();
  };

  const createUser = async () => {
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  };

  const updateUser = async () => {
    await fetch('/api/users', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  };

  const handleEdit = (user: User) => {
    setFormData(user);
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/users`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchUsers();
  };

  const resetForm = () => {
    setFormData({ id: 0, name: '', email: '', password: '' });
    setIsEditing(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <UsersPageContainer>
        <GlobalStyle />
        <Title>User Management</Title>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormInput
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Name'
              required
            />
            <FormInput
              name='email'
              type='email'
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Password'
              required
            />
            <Button type='submit'>
              {isEditing ? 'Update' : 'Create'} User
            </Button>
            <Button type='button' onClick={resetForm}>
              Cancel
            </Button>
          </form>
        </FormContainer>
        <UserTable>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(user)}>Edit</Button>
                  <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </UserTable>
      </UsersPageContainer>
    </ThemeProvider>
  );
};

export default Users;
