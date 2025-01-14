const deleteExpiredAppointmentsCtrl = require('../../controllers/appointmentCtrls/deleteExpiredAppointmentsCtrl.js');

const deleteExpiredAppointmentsHandler = async (req, res) => {

    try {
        const expiredAppointment = await deleteExpiredAppointmentsCtrl();

        res.status(200).send(expiredAppointment);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = deleteExpiredAppointmentsHandler;