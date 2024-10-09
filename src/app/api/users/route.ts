import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(newUser);
}

export async function PUT(req: Request) {
  const { id, name, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { name, email, password: hashedPassword },
  });

  return NextResponse.json(updatedUser);
}

// Delete a user
export async function DELETE(req: Request) {
  const { id } = await req.json();

  const deletedUser = await prisma.user.delete({
    where: { id },
  });

  return NextResponse.json(deletedUser);
}
