const postAppointmentCtrl = require('../../controllers/appointmentCtrls/postAppointmentCtrl.js');

const postAppointmentHandler = async (req, res) => {

    const { start, end, personClient, companyClient, vehicle, procedure } = req.body;
    
    try {

        if (!start || !end || !vehicle || !procedure) {
            return res.status(400).send({ error: 'Missing data' });
        };

        if (isNaN(Date.parse(start)) || isNaN(Date.parse(end))) {
            return res.status(400).send({ error: 'Invalid or missing start/end date' });
        };

        if (!personClient && !companyClient) {
            return res.status(400).send({ error: 'Either personClient or companyClient must be provided' });
        };
        if (personClient && companyClient) {
            return res.status(400).send({ error: 'Cannot have both personClient and companyClient' });
        };

        if (personClient && typeof personClient !== 'string') {
            return res.status(400).send({ error: 'Invalid personClient data' });
        };
        if (companyClient && typeof companyClient !== 'string') {
            return res.status(400).send({ error: 'Invalid companyClient data' });
        };

        if (!vehicle || typeof vehicle !== 'string') {
            return res.status(400).send({ error: 'Invalid vehicle data' });
        };

        if (!procedure || typeof procedure !== 'object') {
            return res.status(400).send({ error: 'Invalid procedure data' });
        };
        if (typeof procedure.title !== 'string' || procedure.title.trim() === '') {
            return res.status(400).send({ error: 'Procedure title is required' });
        };
        if (typeof procedure.description !== 'string' || procedure.description.trim() === '') {
            return res.status(400).send({ error: 'Procedure description is required' });
        };
        if (typeof procedure.service !== 'boolean') {
            return res.status(400).send({ error: 'Procedure service must be a boolean' });
        };
        if (typeof procedure.mechanical !== 'boolean') {
            return res.status(400).send({ error: 'Procedure mechanical must be a boolean' });
        };

        // if (personClient) {
        //     if (!personClient._id) {
        //         return res.status(400).send({ error: 'Invalid personClient data' });
        //     };
        // };
        // if (companyClient) {
        //     if (!companyClient._id) {
        //         return res.status(400).send({ error: 'Invalid companyClient data' });
        //     };
        // };

        // if (!vehicle || !vehicle._id) {
        //     return res.status(400).send({ error: 'Invalid vehicle data' });
        // };

        const newAppointment = await postAppointmentCtrl(start, end, personClient, companyClient, vehicle, procedure);
        res.status(200).send(newAppointment);

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = postAppointmentHandler;