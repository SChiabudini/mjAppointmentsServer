const postAppointmentCtrl = require('../../controllers/appointmentCtrls/postAppointmentCtrl.js');

const postAppointmentHandler = async (req, res) => {

    const { start, end, personClient, companyClient, vehicle, mechanical, service, procedure } = req.body;

    try {
        
        if(!start || !end || !vehicle || !procedure) {
            return res.status(400).send({ error: 'Missing data' });
        }

        // const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        // if(typeof date !== 'string' || !dateRegex.test(date)) {
        //     return res.status(400).send({ error: 'Incorrect format for date. Expected YYYY-MM-DD' });
        // }

        // const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
        // if(typeof time !== 'string' || !timeRegex.test(time)) {
        //     return res.status(400).send({ error: 'Incorrect format for time. Expected HH:MM' });
        // }

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

        const newAppointment = await postAppointmentCtrl(start, end, personClient, companyClient, vehicle, mechanical, service, procedure);
        res.status(200).send(newAppointment);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postAppointmentHandler;