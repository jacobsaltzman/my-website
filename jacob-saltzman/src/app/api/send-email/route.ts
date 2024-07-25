import nodemailer from 'nodemailer';

export default async function handler(req: { method: string; body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error?: unknown; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // For Gmail
      port: 587, // For TLS
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER, // Your Gmail address
        pass: process.env.SMTP_PASS, // Your app password
      },
    });

    // Define the email options
    let mailOptions = {
      from: process.env.SMTP_USER, // Sender address
      to: process.env.EMAIL_RECEIVER, // Receiver's email address
      subject: 'Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    console.log(mailOptions);
    // Send the email
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

