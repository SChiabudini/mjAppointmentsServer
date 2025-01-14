require('../../db.js');
const Appointment = require('../../collections/Appointment.js');

const deleteExpiredAppointmentsCtrl = async () => {
    try {
        // Calcula la fecha de hace dos años a partir de la fecha actual
        const twoYearsAgo = new Date();
        twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

        // Elimina los turnos cuyo campo 'end' sea anterior a hace dos años
        const result = await Appointment.deleteMany({ end: { $lt: twoYearsAgo } });

        console.log(`${result.deletedCount} shifts that date back to two years ago have been eliminated.`);
        
    } catch (error) {
        console.error('Error when deleting expired shifts:', error);
    }
};

module.exports = deleteExpiredAppointmentsCtrl;