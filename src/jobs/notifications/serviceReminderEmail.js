const fs = require('fs');
const path = require('path');
const getLastYearServiceSheetsCtrl = require('../../controllers/serviceSheetCtrls/getLastYearServiceSheetsCtrl.js');

const serviceReminderEmail = async (sgMail) => {

    const today = new Date().toISOString();

    const lastYearServiceSheets = await getLastYearServiceSheetsCtrl(today);

    const templatePath = path.join(__dirname, 'templates/email/serviceReminder.html');
    let emailTemplate = fs.readFileSync(templatePath, 'utf8');

    lastYearServiceSheets.forEach(sheet => {

        const client = sheet.personClient ? sheet.personClient : sheet.companyClient ? sheet.companyClient : null;

        if(!client || !client.email) return;

        const sheetDate = new Intl.DateTimeFormat('es-ES', {
            weekday: 'long', // Día de la semana (ej: "lunes")
            day: '2-digit',  // Día del mes (ej: "25")
            month: 'long',   // Mes (ej: "octubre")
            year: 'numeric'  // Año (ej: "2023")
        }).format(new Date(sheet.date));

        const formattedDate = sheetDate.charAt(0).toUpperCase() + sheetDate.slice(1);

        const serviceDetails = `
            <li>Fecha: <b>${formattedDate}</b></li>
            <li>Vehículo: <b>${sheet.vehicle.licensePlate}</b></li>
            <li>Aceite: ${sheet.oil}</li>
            <li>Filtros: ${sheet.filters.length > 0 ? sheet.filters.join(', ') : "Ninguno"}</li>
            <li>Kilometraje: ${sheet.kilometers}</li>
            <li>Kilómetros para el próximo service: ${sheet.kmsToNextService}</li>
        `;

        const emailBody = emailTemplate
        .replace('{{name}}', client.name)
        .replace('{{serviceDetails}}', serviceDetails);

        const msg = {
            to: client.email,
            from: 'mjprooil44@gmail.com',
            subject: 'Recordatorio de último service en MJ Pro Oil',
            text: `Estimado/a ${client.name}, este es un recordatorio de su último service en MJ Pro Oil con fecha de ${sheetDate}. Le recomendamos comunicarse con nosotros para la realización de su próximo service. Lo esperamos en Av. 44 n° 1877 e/ 132 y 133. Saludos cordiales, el equipo de MJ Pro Oil`,
            html: emailBody,
        };

        sgMail
            .send(msg)
            .then(() => {
                console.log(`Recordatorio de service enviado a ${client.email}`)
            })
            .catch((error) => {
                console.error(error)
            });
    })
};

module.exports = serviceReminderEmail;