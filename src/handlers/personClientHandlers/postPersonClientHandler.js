const postPersonClientCtrl = require('../../controllers/personClientCtrls/postPersonClientCtrl.js');
const getPersonClientsByDni = require('../../controllers/personClientCtrls/getPersonClientsByDniCtrl.js');

const postPersonClientHandler = async (req, res) => {

    const { dni, name, email, phones, cuilCuit, vehicles } = req.body;

    try {
        
        if(!dni || !name || !email || !phones) {
            return res.status(400).send({ error: 'Missing data' });
        }

        if(typeof dni !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - dni' });
        }

        const existingClient = await getPersonClientsByDni(dni);
        if (existingClient[0]?.dni === dni) {
            return res.status(400).send({ error: 'Client with this DNI already exists' });
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

        if(cuilCuit && typeof cuilCuit !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - cuilCuit' });
        }

        if (vehicles && !Array.isArray(vehicles)) {
            return res.status(400).send({ error: 'Incorrect DataType - vehicles' });
        }

        const newPersonClient = await postPersonClientCtrl(dni, name, email, phones, cuilCuit, vehicles);
        res.status(200).send(newPersonClient);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postPersonClientHandler;