// index.jsx

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config(); 

const app = express();
const PORT = 5000;


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 100,

  database: process.env.DB_NAME,
  connectionLimit: 10,
});

app.use(bodyParser.json());


app.use(cors());



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});


app.post('/api/register', (req, res) => {
  const { fullName, phoneNumber, email } = req.body;

 
  if (!fullName || !phoneNumber || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  pool.query('INSERT INTO users (fullName, phoneNumber, email) VALUES (?, ?, ?)', [fullName, phoneNumber, email], (error, results) => {
    if (error) {
      console.error('Error inserting data into MySQL:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

   
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Registration Confirmation',
      text: `Dear ${fullName},\n\nThank you for registering with NP Advertising Solution. Your registration was successful.\n\nBest Regards,\nThe NP Advertising Team`,
    };

    transporter.sendMail(mailOptions, (mailError, info) => {
      if (mailError) {
        console.error('Error sending confirmation email:', mailError);
        return res.status(500).json({ error: 'Error sending confirmation email' });
      }

      console.log('Confirmation email sent:', info.response);
      res.json({ message: 'Registration successful!' });
    });
  });
});


app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello Nhed' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

