import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const expenses = await prisma.expense.findMany();
  return NextResponse.json(expenses);
}

export async function POST(req: Request) {
  const { amount, category, description, userId, date } = await req.json();

  const newExpense = await prisma.expense.create({
    data: {
      amount,
      category,
      description,
      userId,
      date: new Date(date),
    },
  });

  return NextResponse.json(newExpense);
}
