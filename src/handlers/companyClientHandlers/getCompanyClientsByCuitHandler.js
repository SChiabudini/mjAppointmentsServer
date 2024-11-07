const getCompanyClientsByCuitCtrl = require('../../controllers/companyClientCtrls/getCompanyClientsByCuitCtrl.js');

const getCompanyClientsByCuitHandler = async (req, res) => {
    const { cuit } = req.query;  

    try {
        const companyClientsByCuit = await getCompanyClientsByCuitCtrl(cuit);

        if (!companyClientsByCuit) {
            return res.status(404).send(`No client found with cuit: "${cuit}"`);
        }

        res.status(200).send(companyClientsByCuit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCompanyClientsByCuitHandler;