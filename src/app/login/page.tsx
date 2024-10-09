'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/themes';
import { useState } from 'react';
import {
  LoginContainer,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  Container,
} from './styles';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';

const LoginPage = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/login', credentials);
      console.log('response', { response });
      if (response.status === 200) {
        Cookies.set('authToken', response.data.token, { expires: 1 });
        router.push('/');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Invalid username or password');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>Login</h1>
        <LoginContainer>
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <FormGroup>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='text'
                id='email'
                name='email'
                value={credentials.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                id='password'
                name='password'
                value={credentials.password}
                onChange={handleChange}
                placeholder='Enter your password'
                required
              />
            </FormGroup>
            <Button type='submit'>Login</Button>
          </form>
        </LoginContainer>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
