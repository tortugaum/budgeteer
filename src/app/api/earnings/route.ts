import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const earnings = await prisma.earning.findMany();
  return NextResponse.json(earnings);
}

export async function POST(req: Request) {
  const data = await req.json();
  const { source, amount, date } = data;

  if (!source || !amount || !date) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const newEarning = await prisma.earning.create({
    data: {
      source,
      userId: 1,
      amount: parseFloat(amount),
      date: new Date(date),
    },
  });

  return NextResponse.json(newEarning);
}
