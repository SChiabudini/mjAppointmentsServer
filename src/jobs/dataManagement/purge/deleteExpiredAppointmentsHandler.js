const deleteExpiredAppointmentsCtrl = require('../../../controllers/appointmentCtrls/deleteExpiredAppointmentsCtrl.js');

const deleteExpiredAppointmentsHandler = async () => {

    try {

        const today = new Date().toISOString();

        const expiredAppointments = await deleteExpiredAppointmentsCtrl(today);

        console.log(`${expiredAppointments} appointments have been deleted.`);
    } catch (error) {
        console.error('Error deleting expired budgets:', error);
        throw error;
    }
};

module.exports = deleteExpiredAppointmentsHandler;