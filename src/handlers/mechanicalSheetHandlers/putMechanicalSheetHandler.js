const putMechanicalSheetCtrl = require('../../controllers/mechanicalSheetCtrls/putMechanicalSheetCtrl.js');

const putMechanicalSheetHandler = async (req, res) => {

    const { _id, date, personClient, companyClient, vehicle, kilometers, keyWords, description, amount } = req.body;
    
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

        if(typeof keyWords !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - keyWords' });
        };
        
        if(typeof description !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - description' });
        };

        if(typeof amount !== 'number' || isNaN(amount)){
            return res.status(400).send({ error: 'Incorrect DataType - amount' });
        };

        const editMechanicalSheet = await putMechanicalSheetCtrl(_id, date, personClient, companyClient, vehicle, kilometers, keyWords, description, amount);

        res.status(200).send(editMechanicalSheet);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putMechanicalSheetHandler;