'use client';

import { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

type ExpensesBreakdown = {
  category: string;
  amount: number;
};

type EarningsBreakdown = {
  source: string;
  amount: number;
};

type BudgetsBreakdown = {
  name: string;
  totalAmount: number;
};

const Reports = () => {
  const [reportData, setReportData] = useState({
    earnings: 0,
    expenses: 0,
    budgets: 0,
    expensesBreakdown: [] as ExpensesBreakdown[],
    earningsBreakdown: [] as EarningsBreakdown[],
    budgetsBreakdown: [] as BudgetsBreakdown[],
  });

  useEffect(() => {
    fetch('/api/reports')
      .then((res) => res.json())
      .then((data) => {
        setReportData({
          earnings: data.totalEarnings,
          expenses: data.totalExpenses,
          budgets: data.totalBudgets,
          expensesBreakdown: data.expensesBreakdown,
          earningsBreakdown: data.earningsBreakdown,
          budgetsBreakdown: data.budgetsBreakdown || [],
        });
      })
      .catch((err) => console.error('Error fetching report data:', err));
  }, []);

  const { earnings, expenses, budgets, expensesBreakdown, earningsBreakdown } =
    reportData;

  const expenseLabels = expensesBreakdown.map(
    (expense) => expense.category || 'Other'
  );
  const expenseData = expensesBreakdown.map((expense) => expense.amount);

  const earningsLabels = earningsBreakdown.map(
    (earning) => earning.source || 'Other'
  );
  const earningsData = earningsBreakdown.map((earning) => earning.amount);

  return (
    <div>
      <h1>Reports</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>Earnings vs Expenses</h2>
          <Bar
            data={{
              labels: ['Earnings', 'Expenses', 'Budgets'],
              datasets: [
                {
                  label: 'Amount',
                  data: [earnings, expenses, budgets],
                  backgroundColor: ['#2EC4B6', '#FF6B35', '#3A6EA5'],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                },
                title: {
                  display: true,
                  text: 'Overall Financial Overview',
                },
              },
            }}
          />
        </div>

        <div>
          <h2>Expense Breakdown</h2>
          <Doughnut
            data={{
              labels: expenseLabels,
              datasets: [
                {
                  label: 'Expenses',
                  data: expenseData,
                  backgroundColor: ['#3A6EA5', '#2EC4B6', '#FF6B35'],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                },
                title: {
                  display: true,
                  text: 'Expenses by Category',
                },
              },
            }}
          />
        </div>

        <div>
          <h2>Earnings Breakdown</h2>
          <Doughnut
            data={{
              labels: earningsLabels,
              datasets: [
                {
                  label: 'Earnings',
                  data: earningsData,
                  backgroundColor: ['#3A6EA5', '#2EC4B6', '#FF6B35'],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                },
                title: {
                  display: true,
                  text: 'Earnings by Source',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Reports;
