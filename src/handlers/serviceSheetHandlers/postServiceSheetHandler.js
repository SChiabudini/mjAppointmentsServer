const postServiceSheetCtrl = require('../../controllers/serviceSheetCtrls/postServiceSheetCtrl.js');

const postServiceSheetHandler = async (req, res) => {

    const { date, personClient, companyClient, vehicle, kilometers, kmsToNextService, oil, filters, notes, amount } = req.body;

    try {
        
        if(!date || !vehicle || !kilometers || !kmsToNextService || !oil || !filters || !amount) {
            return res.status(400).send({ error: 'Missing data' });
        }

        if (isNaN(Date.parse(date))) {
            return res.status(400).send({ error: 'Invalid or missing date' });
        };

        if(personClient && typeof personClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - personClient' });
        }

        if(companyClient && typeof companyClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - companyClient' });
        }

        if(typeof vehicle !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - vehicle' });
        }

        if(typeof kilometers !== 'number'){
            return res.status(400).send({ error: 'Incorrect DataType - kilometers' });
        }

        if(typeof kmsToNextService !== 'number'){
            return res.status(400).send({ error: 'Incorrect DataType - kmsToNextService' });
        }

        if(typeof oil !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - oil' });
        }

        if (!Array.isArray(filters)) {
            return res.status(400).send({ error: 'Incorrect DataType - filters' });
        }

        if(notes && typeof notes !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - notes' });
        }

        if(typeof amount !== 'number' || isNaN(amount)){
            return res.status(400).send({ error: 'Incorrect DataType - amount' });
        }

        const newServiceSheet = await postServiceSheetCtrl(date, personClient, companyClient, vehicle, kilometers, kmsToNextService, oil, filters, notes, amount);
        res.status(200).send(newServiceSheet);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postServiceSheetHandler;