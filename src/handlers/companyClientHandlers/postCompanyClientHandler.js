const postCompanyClientCtrl = require('../../controllers/companyClientCtrls/postCompanyClientCtrl.js');
const getCompanyClientsByCuit = require('../../controllers/companyClientCtrls/getCompanyClientsByCuitCtrl.js');

const postCompanyClientHandler = async (req, res) => {

    const { cuit, name, email, phones, address } = req.body;

    try {
        
        if(!cuit || !name || !email || !phones) {
            return res.status(400).send({ error: 'Missing data' });
        }

        if(typeof cuit !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - cuit' });
        }

        const existingClient = await getCompanyClientsByCuit(cuit);
        if (existingClient[0]?.cuit === cuit) {
            return res.status(400).send({ error: 'Client with this CUIT already exists' });
        }

        if(typeof name !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - name' });
        }

        if(typeof email !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - email' });
        }

        if (!Array.isArray(phones)) {
            return res.status(400).send({ error: 'Incorrect DataType - phones' });
        }

        if(address && typeof address !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - address' });
        }

        const newCompanyClient = await postCompanyClientCtrl(cuit, name, email, phones, address);
        res.status(200).send(newCompanyClient);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postCompanyClientHandler;