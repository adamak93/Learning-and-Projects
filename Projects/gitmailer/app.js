"use strict"
require('dotenv').config()
const cron = require('node-cron');
const nodemailer = require("nodemailer");


const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: 'Git Repo Status Alert' ,
    text: 'Hello! We are writing to inform you that you have not submitted a Git commit to the Learning and Projects repository in the last 24 hours.',
};

const transporter = nodemailer.createTransport({
    host:"smtp-mail.outlook.com",
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, 
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: mailOptions.from,
        pass: process.env.FROM_PASSWORD
    }
});

cron.schedule('0 0 * * *', () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log('Email send: ' + info.response);
        }
    });
  }, {
    scheduled: true,
    timezone: "America/Toronto"
  });