import styled from 'styled-components';

export const UsersPageContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 10px;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
`;

export const Button = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;

export const FormContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
`;

export const FormInput = styled.input`
  margin-right: 10px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 4px;
`;
