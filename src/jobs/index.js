const { anualServiceReminderEmail, appointmentReminderEmail } = require("./notifications/index.js");
const schedule = require('node-schedule');

const startScheduledJobs = async (sgMail) => {

    const anualServiceReminderEmailTime = '45 15 * * *';

    const appointmentReminderEmailTime = '45 15 * * *';

    console.log("Inicializando tareas programadas...");

    schedule.scheduleJob(anualServiceReminderEmailTime, () => anualServiceReminderEmail(sgMail)); 

    schedule.scheduleJob(appointmentReminderEmailTime, () => appointmentReminderEmail(sgMail));

    console.log("Tareas programadas inicializadas.");
}

module.exports = startScheduledJobs;