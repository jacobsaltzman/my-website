// pages/api/send-email.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: false, // Use TLS/SSL
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
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
