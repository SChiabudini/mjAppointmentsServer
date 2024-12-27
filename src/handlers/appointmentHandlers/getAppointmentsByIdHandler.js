const getAppointmentByIdCtrl = require('../../controllers/appointmentCtrls/getAppointmentByIdCtrl.js');

const getAppointmentByIdHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const appointmentById = await getAppointmentByIdCtrl(id);

        if(!appointmentById){
            return res.status(404).send(`No appointment found with ID: "${id}"`);
        };

        res.status(200).send(appointmentById);

    } catch (error) {
        res.status(500).json({ error: error.message });
    };

};

module.exports = getAppointmentByIdHandler;