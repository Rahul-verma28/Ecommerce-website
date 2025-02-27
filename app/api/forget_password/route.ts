import User from '@/lib/models/users';
import { connectToDB } from '@/lib/mongoDb';
import crypto from 'crypto';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    await connectToDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User does not exist" }, { status: 400 });
    }

    const resetPasswordToken = crypto.randomBytes(32).toString("hex");
    const resetPasswordTokenHash = crypto.createHash('sha256').update(resetPasswordToken).digest('hex');
    const resetPasswordTokenExpires = new Date(Date.now() + 3600000); // 1 hour

    user.resetPasswordToken = resetPasswordTokenHash;
    user.resetPasswordExpires = resetPasswordTokenExpires;

    await user.save();

    const resetUrl = `${process.env.CLIENT_URL}/reset_password?token=${resetPasswordToken}`;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: user.email,
      subject: "Password Reset Request",
      text: `Click the following link to reset your password: ${resetUrl}`,
    });

    return NextResponse.json({ message: "Reset password email sent" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}