const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  requireTLS: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendMail = (email, subject, content) => {
  try {
    var mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: subject,
      html: content,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error.message);
      }
      console.log("mail sended ", info.messageId);
    });
  } catch (error) {
    res.status(500).json({
      msg: "enternal server error",
      success: false,
      error: error.message,
    });
  }
};

module.exports = { sendMail };
