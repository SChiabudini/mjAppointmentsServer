const getActivePersonClientsByNameCtrl = require('../../controllers/personClientCtrls/getActivePersonClientsByNameCtrl.js');

const getActivePersonClientsByNameHandler = async (req, res) => {
    const { name } = req.query;  

    try {
        const activePersonClientsByName = await getActivePersonClientsByNameCtrl(name);

        if (!activePersonClientsByName) {
            return res.status(404).send(`No client found with name: "${name}"`);
        }

        res.status(200).send(activePersonClientsByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActivePersonClientsByNameHandler;