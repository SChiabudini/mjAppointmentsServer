const postMechanicalSheetCtrl = require('../../controllers/mechanicalSheetCtrls/postMechanicalSheetCtrl.js');

const postMechanicalSheetHandler = async (req, res) => {

    const { date, personClient, companyClient, vehicle, kilometers, keyWords, description, amount } = req.body;

    try {
        
        if(!date || !vehicle || !kilometers || !keyWords || !description || !amount) {
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

        if(typeof keyWords !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - keyWords' });
        }

        if(typeof description !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - description' });
        }

        if(typeof amount !== 'number'){
            return res.status(400).send({ error: 'Incorrect DataType - amount' });
        }

        const newMechanicalSheet = await postMechanicalSheetCtrl(date, personClient, companyClient, vehicle, kilometers, keyWords, description, amount);
        res.status(200).send(newMechanicalSheet);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postMechanicalSheetHandler;