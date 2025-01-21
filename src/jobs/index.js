const { anualServiceReminderEmail, appointmentReminderEmail } = require("./notifications/index.js");
const schedule = require('node-schedule');

const startScheduledJobs = async () => {

    const anualServiceReminderEmailTime = '26 19 * * *';

    const appointmentReminderEmailTime = '26 19 * * *';

    console.log("Inicializando tareas programadas...");

    schedule.scheduleJob(anualServiceReminderEmailTime, anualServiceReminderEmail); 

    schedule.scheduleJob(appointmentReminderEmailTime, appointmentReminderEmail);

    console.log("Tareas programadas inicializadas.");
}

module.exports = startScheduledJobs;