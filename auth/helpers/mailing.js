



const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: process.env.SMPT_MAIL,
  port: process.env.SMTP_PORT,
  secure: false,
  requireTLS: false,
  auth: {
    user: process.env.SMTP_HOST,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendMail = (email, subject, content) => {
  try {
    var mailOptions = {
      from: process.env.SMPT_MAIL,
      to: "",
      subject: subject,
      html: content,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error.message);
      }
      console.log("mail sended ", info.message_id);
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
