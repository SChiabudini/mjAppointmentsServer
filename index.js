require('dotenv').config();
const connection = require('./src/db.js')
const server = require('./src/app.js');
const startScheduledJobs = require('./src/jobs/index.js');
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log('listening at 8000');
    startScheduledJobs(sgMail);
}); 

connection();

