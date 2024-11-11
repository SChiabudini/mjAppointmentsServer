const getPersonClientsByNameCtrl = require('../../controllers/personClientCtrls/getPersonClientsByNameCtrl.js');

const getPersonClientsByNameHandler = async (req, res) => {
    const { name } = req.query;  

    try {
        const personClientsByName = await getPersonClientsByNameCtrl(name);

        if (!personClientsByName) {
            return res.status(404).send(`No client found with name: "${name}"`);
        }

        res.status(200).send(personClientsByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getPersonClientsByNameHandler;