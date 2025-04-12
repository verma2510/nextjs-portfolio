const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // email id
    pass: process.env.PASSWORD, // app password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

app.post('/send-email', (req, res) => {
    const { name, phone, email, subject, message } = req.body;
    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL,
      replyTo: email,
      name: name,
      email: email,
      phone: phone,
      subject: `Contact Form Submission: ${subject}`,
      text: message,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
