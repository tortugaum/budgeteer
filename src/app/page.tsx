'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/themes';
import Layout from '@/components/Layout';
import GlobalStyle from '@/utils/GlobalStyle';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import {
  OverviewContainer,
  GraphContainer,
  GraphCard,
  Title,
} from './page.styled';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import axios from 'axios';

const COLORS = [
  theme.colors.primary,
  theme.colors.accent,
  theme.colors.secondaryAccent,
  '#FFBB28',
];

export default function Home() {
  const router = useRouter();
  const [expenses, setExpenses] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [spendingBreakdown, setSpendingBreakdown] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const isLoggedIn = Cookies.get('authToken');
    if (!isLoggedIn) {
      router.push('/login');
    }

    // Fetch expenses and earnings data from the backend
    const fetchData = async () => {
      try {
        const [expensesRes, earningsRes] = await Promise.all([
          axios.get('/api/expenses'),
          axios.get('/api/earnings'),
        ]);
        setExpenses(expensesRes.data);
        setEarnings(earningsRes.data);

        // Calculate spending breakdown
        const breakdown = expensesRes.data.reduce((acc, expense) => {
          const category = expense.category || 'Others';
          if (!acc[category]) {
            acc[category] = 0;
          }
          acc[category] += expense.amount;
          return acc;
        }, {});

        const formattedBreakdown = Object.keys(breakdown).map((key) => ({
          name: key,
          value: breakdown[key],
        }));
        setSpendingBreakdown(formattedBreakdown);

        // Calculate monthly data for expenses and earnings
        const monthlyExpenses = calculateMonthlyData(
          expensesRes.data,
          'expense'
        );
        const monthlyEarnings = calculateMonthlyData(
          earningsRes.data,
          'earning'
        );

        const combinedMonthlyData = monthlyExpenses.map((month, index) => ({
          month: month.month,
          expenses: month.total,
          earnings: monthlyEarnings[index]?.total || 0,
        }));
        setMonthlyData(combinedMonthlyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [router]);

  const calculateMonthlyData = (data, type) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthlyTotals = months.map((month) => ({
      month,
      total: 0,
    }));

    data.forEach((entry) => {
      const date = new Date(entry.date);
      const monthIndex = date.getMonth();
      monthlyTotals[monthIndex].total += entry.amount;
    });

    return monthlyTotals;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <h1>Welcome to Budgeteer</h1>
        <OverviewContainer>
          <GraphContainer>
            <GraphCard>
              <Title>Spending Breakdown</Title>
              <PieChart width={400} height={300}>
                <Pie
                  data={spendingBreakdown}
                  cx={200}
                  cy={150}
                  innerRadius={60}
                  outerRadius={100}
                  fill='#8884d8'
                  paddingAngle={5}
                  dataKey='value'
                >
                  {spendingBreakdown.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              <div style={{ marginTop: '20px' }}>
                {spendingBreakdown.map((entry, index) => (
                  <span
                    key={entry.name}
                    style={{
                      display: 'inline-block',
                      margin: '5px',
                      padding: '5px 10px',
                      backgroundColor: COLORS[index % COLORS.length],
                      color: '#fff',
                      borderRadius: '5px',
                    }}
                  >
                    {entry.name}: ${entry.value}
                  </span>
                ))}
              </div>
            </GraphCard>

            <GraphCard>
              <Title>Monthly Summary</Title>
              <LineChart width={400} height={300} data={monthlyData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='expenses'
                  stroke={theme.colors.secondaryAccent}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type='monotone'
                  dataKey='earnings'
                  stroke={theme.colors.accent}
                />
              </LineChart>
            </GraphCard>
          </GraphContainer>

          <GraphCard>
            <Title>Recent Data</Title>
            <p>
              Total Earnings: $
              {earnings.reduce((sum, earning) => sum + earning.amount, 0)}
            </p>
            <p>
              Total Expenses: $
              {expenses.reduce((sum, expense) => sum + expense.amount, 0)}
            </p>
          </GraphCard>
        </OverviewContainer>
      </Layout>
    </ThemeProvider>
  );
}
