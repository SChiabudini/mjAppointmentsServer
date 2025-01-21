const { anualServiceReminderEmail, appointmentReminderEmail } = require("./notifications/index.js");
const schedule = require('node-schedule');

const startScheduledJobs = async () => {

    const anualServiceReminderEmailTime = '43 22 * * *';

    const appointmentReminderEmailTime = '43 22 * * *';

    console.log("Inicializando tareas programadas...");

    schedule.scheduleJob(anualServiceReminderEmailTime, anualServiceReminderEmail); 

    schedule.scheduleJob(appointmentReminderEmailTime, appointmentReminderEmail);

    console.log("Tareas programadas inicializadas.");
}

module.exports = startScheduledJobs;