const postAppointmentCtrl = require('../../controllers/appointmentCtrls/postAppointmentCtrl.js');

const postAppointmentHandler = async (req, res) => {

    const { date, time, personClient, companyClient, vehicle, procedure } = req.body;

    try {
        
        if(!date || !time || !vehicle || !procedure) {
            return res.status(400).send({ error: 'Missing data' });
        }

        if(typeof date !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - date' });
        }

        if(typeof time !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - time' });
        }

        if(personClient && typeof personClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - personClient' });
        }

        if(companyClient && typeof companyClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - companyClient' });
        }

        if(typeof vehicle !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - vehicle' });
        }

        if(typeof procedure !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - procedure' });
        }

        const newAppointment = await postAppointmentCtrl(date, time, personClient, companyClient, vehicle, procedure);
        res.status(200).send(newAppointment);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postAppointmentHandler;