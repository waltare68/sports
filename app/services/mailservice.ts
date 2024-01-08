var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject: any, toEmail: any, otpText: any) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: otpText,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err: any, response: unknown) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}