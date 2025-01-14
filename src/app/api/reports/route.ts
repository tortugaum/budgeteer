import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const expensesBreakdown = await prisma.expense.groupBy({
    by: ['category'],
    _sum: {
      amount: true,
    },
  });

  const earningsBreakdown = await prisma.earning.groupBy({
    by: ['source'],
    _sum: {
      amount: true,
    },
  });

  const budgetsBreakdown = await prisma.budget.groupBy({
    by: ['name'],
    _sum: {
      totalAmount: true,
    },
  });

  const totalExpenses = expensesBreakdown.reduce(
    (acc, expense) => acc + expense._sum.amount,
    0
  );
  const totalEarnings = earningsBreakdown.reduce(
    (acc, earning) => acc + earning._sum.amount,
    0
  );
  const totalBudgets = budgetsBreakdown.reduce(
    (acc, budget) => acc + budget._sum.totalAmount,
    0
  );

  return NextResponse.json({
    totalExpenses,
    totalEarnings,
    totalBudgets,
    expensesBreakdown: expensesBreakdown.map((expense) => ({
      category: expense.category,
      amount: expense._sum.amount,
    })),
    earningsBreakdown: earningsBreakdown.map((earning) => ({
      source: earning.source,
      amount: earning._sum.amount,
    })),
    budgetsBreakdown: budgetsBreakdown.map((budget) => ({
      name: budget.name,
      totalAmount: budget._sum.totalAmount,
    })),
  });
}
