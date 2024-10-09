'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/themes';
import Layout from '@/components/Layout';
import IncomeTracker from '@/components/IncomeTracker';
import GlobalStyle from '@/utils/GlobalStyle';

const IncomeTrackerPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <h1>Income Tracker</h1>
        <p>Keep track of your income sources!</p>
        <IncomeTracker />
      </Layout>
    </ThemeProvider>
  );
};

export default IncomeTrackerPage;
