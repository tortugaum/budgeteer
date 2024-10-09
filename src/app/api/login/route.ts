import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { sign } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = sign({ id: user.id, email: user.email }, secretKey, {
      expiresIn: '1d',
    });

    return NextResponse.json(
      { token, user: { id: user.id, email: user.email } },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
