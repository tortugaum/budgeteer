'use client';
import Link from 'next/link';
import {
  FiHome,
  FiPieChart,
  FiTrendingUp,
  FiDollarSign,
  FiSettings,
  FiFileText,
  FiLogOut,
} from 'react-icons/fi';
import {
  SidebarContainer,
  Logo,
  NavList,
  NavItem,
  Footer,
  LogoutButton,
  LogoutButtonWrapper,
  FooterText,
} from './styles';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie =
      'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    router.push('/login');
  };

  return (
    <SidebarContainer>
      <Logo>Budgeteer</Logo>
      <NavList>
        <NavItem>
          <Link href='/'>
            {' '}
            <FiHome />
            Overview
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/expense-tracker'>
            {' '}
            <FiPieChart />
            Expenses
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/income-tracker'>
            {' '}
            <FiTrendingUp />
            Earnings
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/budget-planning'>
            {' '}
            <FiDollarSign />
            Budget
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/reports'>
            {' '}
            <FiFileText />
            Reports
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/settings'>
            {' '}
            <FiSettings />
            Settings
          </Link>
        </NavItem>
      </NavList>
      <Footer>
        <LogoutButtonWrapper>
          <LogoutButton onClick={handleLogout}>
            <FiLogOut />
            Log Out
          </LogoutButton>
        </LogoutButtonWrapper>
        <FooterText>© {new Date().getFullYear()} Budgeteer</FooterText>
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
