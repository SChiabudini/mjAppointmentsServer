const { serviceReminderEmail, appointmentReminderEmail } = require("./notifications/index.js");
const schedule = require('node-schedule');

const startScheduledJobs = async (sgMail) => {

    // Formato de horario CRON * * * * *, posiciones explicadas de izquierda a derecha:

    // 1. Minuto (de 0 a 59)

    // 2. Hora (de 0 a 23)

    // 3. Día del mes (de 1 a 31)

    // 4. Mes (del 1 al 12)

    // 5. Día de la semana (del 0 a 6, siendo 0 Domingo y 6 Sábado)

    // Si se deja *, significa TODOS

    // Hay otros formatos especiales como L para último día del mes o de la semana

    const serviceReminderEmailTime = '56 15 * * *'; //Siempre setear 3 hs después de la hora deseada (ambos horarios)

    const appointmentReminderEmailTime = '00 12 * * *';

    console.log("Starting scheduled jobs...");

    schedule.scheduleJob(serviceReminderEmailTime, () => serviceReminderEmail(sgMail)); 

    schedule.scheduleJob(appointmentReminderEmailTime, () => appointmentReminderEmail(sgMail));

    console.log("Scheduled jobs initialized.");
}

module.exports = startScheduledJobs;