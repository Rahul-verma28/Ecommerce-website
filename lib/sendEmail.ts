import nodemailer from 'nodemailer';

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // SMTP server address
      port: parseInt(process.env.SMTP_PORT || '587', 10), // Default SMTP port
      secure: false, // Use SSL if port is 465
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || '"Your App" <no-reply@yourapp.com>',
      to,
      subject,
      html, // Email content as HTML
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Email delivery failed');
  }
}