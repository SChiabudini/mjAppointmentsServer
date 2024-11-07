const getPersonClientsByDniCtrl = require('../../controllers/personClientCtrls/getPersonClientsByDniCtrl.js');

const getPersonClientsByDniHandler = async (req, res) => {
    const { dni } = req.query;  

    try {
        const personClientsByDni = await getPersonClientsByDniCtrl(dni);

        if (!personClientsByDni) {
            return res.status(404).send(`No client found with dni: "${dni}"`);
        }

        res.status(200).send(personClientsByDni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getPersonClientsByDniHandler;