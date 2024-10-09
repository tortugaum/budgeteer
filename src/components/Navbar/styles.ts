import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 30px;
  font-size: 24px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 5px;
  }

  svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.div`
  margin-top: auto;
`;

export const FooterText = styled.div`
  padding: 10px 0;

  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const LogoutButtonWrapper = styled.div`
  margin-top: auto;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  width: 100%;
  text-align: left;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    font-size: 1.25rem;
  }
`;
