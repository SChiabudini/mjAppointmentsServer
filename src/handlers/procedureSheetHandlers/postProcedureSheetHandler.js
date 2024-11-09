const postProcedureSheetCtrl = require('../../controllers/procedureSheetCtrls/postProcedureSheetCtrl.js');

const postProcedureSheetHandler = async (req, res) => {

    const { personClient, companyClient, vehicle, kilometers, keyWords, description, amount } = req.body;

    try {
        
        if(!vehicle || !kilometers || !keyWords || !description || !amount) {
            return res.status(400).send({ error: 'Missing data' });
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

        const newProcedureSheet = await postProcedureSheetCtrl(personClient, companyClient, vehicle, kilometers, keyWords, description, amount);
        res.status(200).send(newProcedureSheet);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postProcedureSheetHandler;