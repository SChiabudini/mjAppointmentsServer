const getActiveAppointmentsCtrl = require('../../controllers/appointmentCtrls/getActiveAppointmentsCtrl.js');

const getActiveAppointmentsHandler = async (req, res) => {

    try {
        const activeAppointments = await getActiveAppointmentsCtrl();

        res.status(200).send(activeAppointments);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getActiveAppointmentsHandler;