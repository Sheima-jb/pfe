import nodemailer from 'nodemailer';

export const sendResetEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'chaimaj340@gmail.com',
      pass: 'okcynphahtvoplox',
    },
  });

  const resetLink = `http://localhost:3000/reset-password/${token}`;

  await transporter.sendMail({
    from: '"Support Team" <chaimaj340@gmail.com>',
    to: email,
    subject: 'Password Reset Request',
    html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
};
