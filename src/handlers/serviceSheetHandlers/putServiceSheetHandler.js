const putServiceSheetCtrl = require('../../controllers/serviceSheetCtrls/putServiceSheetCtrl.js');

const putServiceSheetHandler = async (req, res) => {

    const { _id, date, personClient, companyClient, vehicle, kilometers, kmsToNextService, oil, filters, notes, amount } = req.body;
    
    try {

        if(typeof date !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - date' });
        }

        if(personClient !== null && typeof personClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - personClient' });
        };

        if(companyClient !== null && typeof companyClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - companyClient' });
        };

        if(typeof vehicle !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - vehicle' });
        };

        if(typeof kilometers !== 'number' || isNaN(kilometers)){
            return res.status(400).send({ error: 'Incorrect DataType - kilometers' });
        };

        if(typeof kmsToNextService !== 'number' || isNaN(kmsToNextService)){
            return res.status(400).send({ error: 'Incorrect DataType - kmsToNextService' });
        };
        
        if(typeof oil !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - oil' });
        };

        if(!Array.isArray(filters)){
            return res.status(400).send({ error: 'Incorrect DataType - filters' });
        };

        if(notes && typeof notes !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - notes' });
        };

        if(typeof amount !== 'number' || isNaN(amount)){
            return res.status(400).send({ error: 'Incorrect DataType - amount' });
        };

        const editServiceSheet = await putServiceSheetCtrl(_id, date, personClient, companyClient, vehicle, kilometers, kmsToNextService, oil, filters, notes, amount);

        res.status(200).send(editServiceSheet);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putServiceSheetHandler;