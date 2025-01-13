const putAppointmentCtrl = require('../../controllers/appointmentCtrls/putAppointmentCtrl.js');

const putAppointmentHandler = async (req, res) => {

    const { _id, start, end, personClient, companyClient, vehicle, procedure } = req.body;
    
    try {

        if(typeof start !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - start' });
        }

        if(typeof end !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - end' });
        }

        if(personClient !== null && typeof personClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - personClient' });
        }

        if(companyClient !== null && typeof companyClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - companyClient' });
        }

        if(typeof vehicle !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - vehicle' });
        }

        if(typeof procedure !== 'object'){
            return res.status(400).send({ error: 'Incorrect DataType - procedure' });
        }

        const editAppointment = await putAppointmentCtrl(_id, start, end, personClient, companyClient, vehicle, procedure);

        res.status(200).send(editAppointment);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putAppointmentHandler;