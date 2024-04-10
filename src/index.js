const nodemailer = require('nodemailer')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

app.all('*', async (req, res) => {
  await transporter.sendMail({
    from: 'exemplo@exemplo.com',
    to: 'exemplo@exemplo.com',
    subject: 'Teste',
    text: 'Teste',
  })

  res.send('ok')
})

app.listen(3000, () => {
  console.log('Server started')
})
