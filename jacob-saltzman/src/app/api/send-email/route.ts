import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  console.log("sent to API.");

  const { name, email, message } = await req.json();

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let mailOptions = {
    from: process.env.SMTP_USER, // Sender address
    to: process.env.EMAIL_RECEIVER, // Receiver's email address
    subject: 'Contact Form Message',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  console.log(mailOptions);

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'GET method not allowed' }, { status: 405 });
}
