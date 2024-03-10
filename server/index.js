const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
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

// Sample API endpoint to insert data into the 'users' table and send a confirmation email
app.post('/api/register', (req, res) => {
  const { fullName, phoneNumber, email } = req.body;

  pool.query('INSERT INTO users (fullName, phoneNumber, email) VALUES (?, ?, ?)', [fullName, phoneNumber, email], (error, results) => {
    if (error) {
      console.error('Error inserting data into MySQL:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Send registration confirmation email
      const mailOptions = {
        from: 'npidaoc@gmail.com',
        to: email,
        subject: 'Registration Confirmation',
        text: `Dear ${fullName},\n\nThank you for registering with NP Advertising Solution. Your registration was successful.\n\nBest Regards,\nThe NP Advertising Team`,
      };

      transporter.sendMail(mailOptions, (mailError, info) => {
        if (mailError) {
          console.error('Error sending confirmation email:', mailError);
          res.status(500).json({ error: 'Error sending confirmation email' });
        } else {
          console.log('Confirmation email sent:', info.response);
          res.json({ message: 'Registration successful!' });
        }
      });
    }
  });
});

// app.get('/', (req, res) => {
//   res.send('Hello, this is NP advertising solution');
// });
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello Nhed' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

