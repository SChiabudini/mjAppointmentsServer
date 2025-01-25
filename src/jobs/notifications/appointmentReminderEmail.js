const getTomorrowAppointments = require('../../controllers/appointmentCtrls/getTomorrowAppointmentsCtrl.js');

const appointmentReminderEmail = async (sgMail) => {

    const today = new Date().toISOString();

    const tomorrowAppointments = await getTomorrowAppointments(today);

    console.log(tomorrowAppointments);

    const msg = {
        to: 'sofi.ch5@gmail.com',
        from: 'sofiachiabudini@gmail.com',
        subject: 'Confirmación de tu turno para mañana',
        text: '¡Hola! Este es un recordatorio de tu turno agendado para mañana.',
        html: '<p>¡Hola! Este es un recordatorio de tu turno agendado para mañana.</p>',
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
};

module.exports = appointmentReminderEmail;