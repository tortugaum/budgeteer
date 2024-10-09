import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  // Group expenses by category and sum their amounts
  const expenses = await prisma.expense.groupBy({
    by: ['category'],
    _sum: {
      amount: true,
    },
  });

  // You can also handle earnings and budgets similarly if needed, but they are not shown here
  // Example for earnings:
  // const earnings = await prisma.earning.groupBy({
  //   by: ['source'],
  //   _sum: {
  //     amount: true,
  //   },
  // });

  // Send the aggregated data as JSON
  return NextResponse.json({
    expensesBreakdown: expenses.map((expense) => ({
      category: expense.category,
      amount: expense._sum.amount,
    })),
  });
}
