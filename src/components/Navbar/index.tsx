'use client';
import Link from 'next/link'; // Import Link from Next.js
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
    // Clear authentication cookies or session data
    document.cookie =
      'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Example of clearing cookie
    // Redirect to login page after logout
    router.push('/login');
  };

  return (
    <SidebarContainer>
      <Logo>Budgeteer</Logo>
      <NavList>
        <NavItem>
          <Link href='/'>
            {' '}
            {/* Link to Overview */}
            <FiHome />
            Overview
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/expense-tracker'>
            {' '}
            {/* Link to Expenses */}
            <FiPieChart />
            Expenses
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/income-tracker'>
            {' '}
            {/* Link to Earnings */}
            <FiTrendingUp />
            Earnings
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/budget-planning'>
            {' '}
            {/* Link to Budgets */}
            <FiDollarSign />
            Budget
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/reports'>
            {' '}
            {/* Link to Reports */}
            <FiFileText />
            Reports
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/settings'>
            {' '}
            {/* Link to Settings */}
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
