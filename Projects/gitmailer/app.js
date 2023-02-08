'use strict';

require('dotenv').config();
const { Octokit } = require('@octokit/rest');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const moment = require('moment-timezone');

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587,
  tls: {
    ciphers: 'SSLv3',
  },
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.FROM_PASSWORD,
  },
});

const mailNoCommitOptions = {
  from: process.env.FROM_EMAIL,
  cc: process.env.CC_EMAIL,
  to: process.env.TO_EMAIL,
  subject: 'Git Repo Status Alert',
  text: 'Hello! We are writing to inform you that you have not submitted a Git commit to the Learning and Projects repository in the last 24 hours. Do better.',
};

const mailCommitOptions = {
  from: process.env.FROM_EMAIL,
  to: process.env.CC_EMAIL,
  subject: 'Git Repo Status Alert',
  text: 'Hello! We are writing to inform you that a Git commit has been submitted to the Learning and Projects repository in the last 24 hours. Keep up the great work!!',
};

const octokit = new Octokit({
  auth: process.env.GH_KEY,
  timeZone: 'America/Toronto',
});

async function getCommitsByDay() {
  const { data } = await octokit.rest.repos.listCommits({
    repo: process.env.GH_REPO,
    owner: process.env.GH_AUTHOR,
  });
  console.log(data[0]);

  const currentIsoDate = new Date().toISOString();
  const commitIsoDate = data[0].commit.author.date;

  const currentLocaleDate = moment
    .utc(currentIsoDate)
    .tz('America/Toronto')
    .format()
    .slice(0, 10);
  const lastCommitDate = moment
    .utc(commitIsoDate)
    .tz('America/Toronto')
    .format()
    .slice(0, 10);

  console.log(currentLocaleDate + ' and ' + lastCommitDate);
  if (currentLocaleDate === lastCommitDate) {
    transporter.sendMail(mailCommitOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Commit Found. Email sent: ' + info.response);
      }
    });
  } else {
    transporter.sendMail(mailNoCommitOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Commit not found. Email sent: ' + info.response);
      }
    });
  }
}

cron.schedule(
  '0 0 * * 1-5 ',
  () => {
    getCommitsByDay();
  },
  {
    scheduled: true,
    timezone: 'America/Toronto',
  }
);
