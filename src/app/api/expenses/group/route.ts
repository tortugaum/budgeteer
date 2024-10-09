import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const expenses = await prisma.expense.groupBy({
    by: ['category'],
    _sum: {
      amount: true,
    },
  });

  return NextResponse.json({
    expensesBreakdown: expenses.map((expense) => ({
      category: expense.category,
      amount: expense._sum.amount,
    })),
  });
}
