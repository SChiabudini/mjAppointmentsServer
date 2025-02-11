const fs = require('fs');
const path = require('path');
const getTomorrowAppointments = require('../../controllers/appointmentCtrls/getTomorrowAppointmentsCtrl.js');

const appointmentReminderEmail = async (sgMail) => {

    const today = new Date().toISOString();

    const tomorrowAppointments = await getTomorrowAppointments(today);

    const templatePath = path.join(__dirname, 'templates/email/appointmentReminder.html');
    let emailTemplate = fs.readFileSync(templatePath, 'utf8');

    tomorrowAppointments.forEach(appointment => {

        const client = appointment.personClient ? appointment.personClient : appointment.companyClient ? appointment.companyClient : null;

        if(!client || !client.email) return;

        const appointmentDate = new Intl.DateTimeFormat('es-ES', {
            weekday: 'long', 
            day: '2-digit', 
            month: 'long'
        }).format(new Date(appointment.start));
        
        const formattedDate = appointmentDate.charAt(0).toUpperCase() + appointmentDate.slice(1);

        const appointmentTime = new Intl.DateTimeFormat('es-ES', {
            hour: '2-digit', // Hora con dos dígitos
            minute: '2-digit', // Minutos con dos dígitos
            hour12: false, // Formato 24 horas
        }).format(new Date(appointment.start)).replace(':', '.') + ' hs';

        const appointmentDetails = `
            <li>Fecha y hora: <b>${formattedDate} a las ${appointmentTime}</b></li>
            <li>Vehículo: <b>${appointment.vehicle.licensePlate}</b></li>
            <li>Procedimiento: ${appointment.procedure.service ? "Service - " : ""} ${appointment.procedure.mechanical ? "Mecánica - " : ""} ${appointment.procedure.title}</li>
        `;

        const emailBody = emailTemplate
        .replace('{{name}}', client.name)
        .replace('{{appointmentDetails}}', appointmentDetails)

        const msg = {
            to: client.email,
            //from: 'sofi.ch5@gmail.com', //test
            from: 'mjprooil44@gmail.com',
            subject: 'Recordatorio de su turno en MJ Pro Oil',
            text: `Estimado/a ${client.name}, este es un recordatorio de su turno en MJ Pro Oil para mañana a las ${appointmentTime}. Si tiene alguna consulta o necesita reprogramar su turno, no dude en comunicarse con nosotros. Lo esperamos en Av. 44 n° 1877 e/ 132 y 133. Saludos cordiales, el equipo de MJ Pro Oil`,
            html: emailBody,
        };
    
        sgMail
            .send(msg)
            .then(() => {
                console.log(`Recordatorio de turno enviado a ${client.email}`)
            })
            .catch((error) => {
                console.error(error)
            });
    })


};

module.exports = appointmentReminderEmail;