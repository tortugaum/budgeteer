'use client';

import { ThemeProvider } from 'styled-components';
import theme from '@/utils/themes';
import Layout from '@/components/Layout';
import { useState } from 'react';
import { SettingsContainer, FormGroup, Label, Input, Button } from './styles';
import GlobalStyle from '@/utils/GlobalStyle';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    username: '',
    email: '',
    password: '',
    notifications: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, email, notifications, password } = settings;

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        email,
        password,
        notifications,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <h1>Settings</h1>
        <SettingsContainer>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='username'>Username</Label>
              <Input
                type='text'
                id='username'
                name='username'
                value={settings.username}
                onChange={handleChange}
                placeholder='Enter your username'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                id='email'
                name='email'
                value={settings.email}
                onChange={handleChange}
                placeholder='Enter your email'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='passwod'>Password</Label>
              <Input
                type='password'
                id='password'
                name='password'
                value={settings.password}
                onChange={handleChange}
                placeholder='Enter your password'
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='checkbox'
                id='notifications'
                name='notifications'
                checked={settings.notifications}
                onChange={handleChange}
                style={{ width: 10 }}
              />
              <Label
                htmlFor='notifications'
                style={{ display: 'inline', marginLeft: '0.5em' }}
              >
                Enable Notifications
              </Label>
            </FormGroup>
            <Button type='submit'>Save Settings</Button>
          </form>
        </SettingsContainer>
      </Layout>
    </ThemeProvider>
  );
};

export default SettingsPage;
