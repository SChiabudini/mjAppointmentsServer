require('../../db.js');
const Appointment = require('../../collections/Appointment.js');

const getTomorrowAppointmentsCtrl = async (date) => {
    try {
        if (!date) {
            throw new Error('Se debe proporcionar una fecha válida.');
        }

        // Convertir la fecha de entrada a un objeto Date
        const inputDate = new Date(date);

        // Calcular el inicio y fin del día siguiente
        const tomorrowStart = new Date(
            inputDate.getFullYear(),
            inputDate.getMonth(),
            inputDate.getDate() + 1
        );
        const tomorrowEnd = new Date(
            inputDate.getFullYear(),
            inputDate.getMonth(),
            inputDate.getDate() + 2
        );

        // Buscar citas dentro del rango
        const appointments = await Appointment.find({
            start: {
                $gte: tomorrowStart.toISOString(),
                $lt: tomorrowEnd.toISOString(),
            },
        })
        .populate('vehicle')
        .populate('personClient')
        .populate('companyClient');

        return appointments;
    } catch (error) {
        console.error('Error obteniendo las citas del día de mañana:', error.message);
        throw error;
    }
};

module.exports = getTomorrowAppointmentsCtrl;