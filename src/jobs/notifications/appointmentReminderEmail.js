const getTomorrowAppointments = require('../../controllers/appointmentCtrls/getTomorrowAppointmentsCtrl.js');

const appointmentReminderEmail = async () => {

    const today = new Date().toISOString();

    const tomorrowAppointments = await getTomorrowAppointments(today);

    console.log(tomorrowAppointments);
};

module.exports = appointmentReminderEmail;