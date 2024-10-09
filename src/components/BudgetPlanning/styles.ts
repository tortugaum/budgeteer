import styled from 'styled-components';

export const PlanningContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  background-color: white;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BudgetList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const BudgetItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
`;
