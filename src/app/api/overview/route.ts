import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const earnings = await prisma.earning.findMany();
  const expenses = await prisma.expense.findMany();

  const totalEarnings = earnings.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);

  // For spending breakdown, let's assume expenses are categorized
  const spendingBreakdown = expenses.reduce((acc, expense) => {
    const category = expense.category || 'Others';
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += expense.amount;
    return acc;
  }, {});

  const transactions = await prisma.transaction.findMany({
    orderBy: { date: 'desc' }, // Get recent transactions
    take: 5,
  });

  return NextResponse.json({
    totalEarnings,
    totalExpenses,
    spendingBreakdown,
    transactions,
  });
}
