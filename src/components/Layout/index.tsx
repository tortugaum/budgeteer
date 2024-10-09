import React, { ReactNode } from 'react';

import Sidebar from '../Navbar';
import { Content } from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
