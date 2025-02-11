const { serviceReminderEmail, appointmentReminderEmail } = require("./notifications/index.js");
const { deleteExpiredAppointmentsHandler, deleteExpiredBudgetsHandler } = require("./dataPurge/index.js");
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

    const serviceReminderEmailTime = '35 08 * * *'; //Siempre setear 3 hs después de la hora deseada (válido para todas las constantes de tiempo)

    const appointmentReminderEmailTime = '00 11 * * *';

    const deleteExpiredAppointmentsTime = '00 21 * * *';

    const deleteExpiredBudgetsTime = '00 21 * * *';

    console.log("Starting scheduled jobs...");

    schedule.scheduleJob(serviceReminderEmailTime, () => serviceReminderEmail(sgMail)); 

    schedule.scheduleJob(appointmentReminderEmailTime, () => appointmentReminderEmail(sgMail));

    schedule.scheduleJob(deleteExpiredAppointmentsTime, deleteExpiredAppointmentsHandler);

    schedule.scheduleJob(deleteExpiredBudgetsTime, deleteExpiredBudgetsHandler);

    console.log("Scheduled jobs initialized.");
}

module.exports = startScheduledJobs;