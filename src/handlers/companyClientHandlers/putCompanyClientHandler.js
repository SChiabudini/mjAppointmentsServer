const putCompanyClientCtrl = require('../../controllers/companyClientCtrls/putCompanyClientCtrl.js');

const putCompanyClientHandler = async (req, res) => {

    const { _id, cuit, name, email, phones, address, vehicles } = req.body;

    try {

        if(typeof cuit !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - cuit' });
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

        if (vehicles && !Array.isArray(vehicles)) {
            return res.status(400).send({ error: 'Incorrect DataType - vehicles' });
        }

        const editCompanyClient = await putCompanyClientCtrl(_id, cuit, name, email, phones, address, vehicles);

        res.status(200).send(editCompanyClient);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putCompanyClientHandler;