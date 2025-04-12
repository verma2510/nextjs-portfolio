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
      to: "verma.aman1008@gmail.com", // recipient email
      replyTo: email,
      subject: `Contact Form Submission: ${subject}`,
      text: `
        You have received a new message from your Portfolio Contact Form.:`,
      html: `
        <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
        <p><strong style="color: #2196F3;">Name:</strong> ${name}</p>
        <p><strong style="color: #2196F3;">Email:</strong> <a href="mailto:${email}" style="color: #FF5722;">${email}</a></p>
        <p><strong style="color: #2196F3;">Phone:</strong> ${phone}</p>
        <p><strong style="color: #2196F3;">Subject:</strong> ${subject}</p>
        <h3 style="color: #FFC107;">Message:</h3>
        <p style="color: #000;">${message.replace(/\n/g, '<br>')}</p>
      `,
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
