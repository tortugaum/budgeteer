// app/settings/styles.ts
import styled from 'styled-components';

export const SettingsContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) =>
    theme.colors.neutralBackground}; /* Light Gray */
  border-radius: 8px;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.textColor}; /* Dark Slate */
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryColor}; /* Calm Blue */
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor}; /* Calm Blue */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.secondaryAccent}; /* Warm Orange */
  }
`;
