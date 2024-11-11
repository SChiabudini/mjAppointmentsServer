const getActiveCompanyClientsByNameCtrl = require('../../controllers/companyClientCtrls/getActiveCompanyClientsByNameCtrl.js');

const getActiveCompanyClientsByNameHandler = async (req, res) => {
    const { name } = req.query;  

    try {
        const activeCompanyClientsByName = await getActiveCompanyClientsByNameCtrl(name);

        if (!activeCompanyClientsByName) {
            return res.status(404).send(`No client found with name: "${name}"`);
        }

        res.status(200).send(activeCompanyClientsByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveCompanyClientsByNameHandler;