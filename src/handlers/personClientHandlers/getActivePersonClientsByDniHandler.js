const getActivePersonClientsByDniCtrl = require('../../controllers/personClientCtrls/getActivePersonClientsByDniCtrl.js');

const getActivePersonClientsByDniHandler = async (req, res) => {
    const { dni } = req.query;  

    try {
        const activePersonClientsByDni = await getActivePersonClientsByDniCtrl(dni);

        if (!activePersonClientsByDni) {
            return res.status(404).send(`No client found with dni: "${dni}"`);
        }

        res.status(200).send(activePersonClientsByDni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActivePersonClientsByDniHandler;