'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/themes';
import Reports from '@/components/Reports';
import Layout from '@/components/Layout';
import GlobalStyle from '@/utils/GlobalStyle';

const ReportsPage = async () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Reports />
      </Layout>
    </ThemeProvider>
  );
};

export default ReportsPage;
