const { anualServiceReminderEmail, appointmentReminderEmail } = require("./notifications/index.js");
const schedule = require('node-schedule');

const startScheduledJobs = async (sgMail) => {

    const anualServiceReminderEmailTime = '52 19 * * *';

    const appointmentReminderEmailTime = '52 19 * * *';

    console.log("Inicializando tareas programadas...");

    schedule.scheduleJob(anualServiceReminderEmailTime, () => anualServiceReminderEmail(sgMail)); 

    schedule.scheduleJob(appointmentReminderEmailTime, () => appointmentReminderEmail(sgMail));

    console.log("Tareas programadas inicializadas.");
}

module.exports = startScheduledJobs;