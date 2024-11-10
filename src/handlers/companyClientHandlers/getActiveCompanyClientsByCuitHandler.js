const getActiveCompanyClientsByCuitCtrl = require('../../controllers/companyClientCtrls/getActiveCompanyClientsByCuitCtrl.js');

const getActiveCompanyClientsByCuitHandler = async (req, res) => {
    const { cuit } = req.query;  

    try {
        const activeCompanyClientsByCuit = await getActiveCompanyClientsByCuitCtrl(cuit);

        if (!activeCompanyClientsByCuit) {
            return res.status(404).send(`No client found with cuit: "${cuit}"`);
        }

        res.status(200).send(activeCompanyClientsByCuit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveCompanyClientsByCuitHandler;