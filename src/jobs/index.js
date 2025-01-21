const { anualServiceReminderEmail, appointmentReminderEmail } = require("./notifications/index.js");
const schedule = require('node-schedule');

const startScheduledJobs = async () => {

    const anualServiceReminderEmailTime = '25 18 * * *';

    const appointmentReminderEmailTime = '25 18 * * *';

    console.log("Inicializando tareas programadas...");

    schedule.scheduleJob(anualServiceReminderEmailTime, anualServiceReminderEmail); 

    schedule.scheduleJob(appointmentReminderEmailTime, appointmentReminderEmail);

    console.log("Tareas programadas inicializadas.");
}

module.exports = startScheduledJobs;