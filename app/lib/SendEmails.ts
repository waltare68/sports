const nodemailer = require('nodemailer');
const emailConfig = require('./emailConfig');

async function sendEmail(to: any, subject: any, text: any) {
  const transporter = nodemailer.createTransport(emailConfig);

  const mailOptions = {
    from: 'milosammir@gmail.com',
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = { sendEmail };