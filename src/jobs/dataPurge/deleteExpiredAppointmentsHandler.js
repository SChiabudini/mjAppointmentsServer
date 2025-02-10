const deleteExpiredAppointmentsCtrl = require('../../controllers/appointmentCtrls/deleteExpiredAppointmentsCtrl.js');

const deleteExpiredAppointmentsHandler = async (req, res) => {

    try {

        const today = new Date().toISOString();

        const expiredAppointment = await deleteExpiredAppointmentsCtrl(today);

        console.log(`${expiredAppointment} appointments has been deleted.`);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = deleteExpiredAppointmentsHandler;