const { anualServiceReminderEmail, appointmentReminderEmail } = require("./notifications/index.js");
const schedule = require('node-schedule');

const startScheduledJobs = async () => {

    const anualServiceReminderEmailTime = '57 21 * * *';

    const appointmentReminderEmailTime = '57 21 * * *';

    console.log("Inicializando tareas programadas...");

    schedule.scheduleJob(anualServiceReminderEmailTime, anualServiceReminderEmail); 

    schedule.scheduleJob(appointmentReminderEmailTime, appointmentReminderEmail);

    console.log("Tareas programadas inicializadas.");
}

module.exports = startScheduledJobs;