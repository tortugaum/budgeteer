import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const budgets = await prisma.budget.findMany();
  return NextResponse.json(budgets);
}

export async function POST(req: Request) {
  const data = await req.json();
  const { name, totalAmount } = data;

  if (!name || !totalAmount) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const newBudget = await prisma.budget.create({
    data: {
      name,
      userId: 1,
      totalAmount: parseFloat(totalAmount),
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  return NextResponse.json(newBudget);
}
