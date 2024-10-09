import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

// Fetch all users
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// Create a new user
export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // Hash the password before saving it to the database
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword, // Save the hashed password
    },
  });

  return NextResponse.json(newUser);
}

// Update an existing user
export async function PUT(req: Request) {
  const { id, name, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

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
