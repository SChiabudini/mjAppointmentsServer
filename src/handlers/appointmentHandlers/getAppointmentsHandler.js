const getAppointmentsCtrl = require('../../controllers/appointmentCtrls/getAppointmentsCtrl.js');

const getAppointmentsHandler = async (req, res) => {

    try {
        const appointments = await getAppointmentsCtrl();

        res.status(200).send(appointments);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getAppointmentsHandler;