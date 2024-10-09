// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure
import { sign } from 'jsonwebtoken'; // Use this to generate JWT token

const secretKey = process.env.JWT_SECRET || 'your-secret-key'; // Ensure you have a secret key in your environment variables

export async function POST(req: Request) {
  const { email, password } = await req.json(); // Parse the incoming request body

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // If user not found, return error
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Compare provided password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate JWT token (optional)
    const token = sign({ id: user.id, email: user.email }, secretKey, {
      expiresIn: '1d', // Adjust token expiry as needed
    });

    // Return success response with token (or any other user info you need)
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
