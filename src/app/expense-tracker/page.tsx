'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/themes';
import Layout from '@/components/Layout';
import ExpenseTracker from '@/components/ExpenseTracker';
import GlobalStyle from '@/utils/GlobalStyle';

const ExpenseTrackerPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <h1>Expense Tracker</h1>
        <p>Track your expenses efficiently!</p>
        <ExpenseTracker />
      </Layout>
    </ThemeProvider>
  );
};

export default ExpenseTrackerPage;
