'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/themes';
import Layout from '@/components/Layout';
import BudgetPlanning from '@/components/BudgetPlanning';
import GlobalStyle from '@/utils/GlobalStyle';

const BudgetPlanningPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <h1>Budget Planning</h1>
        <p>Plan your budget effectively!</p>
        <BudgetPlanning />
      </Layout>
    </ThemeProvider>
  );
};

export default BudgetPlanningPage;
