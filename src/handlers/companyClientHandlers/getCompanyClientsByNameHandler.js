const getCompanyClientsByNameCtrl = require('../../controllers/companyClientCtrls/getCompanyClientsByNameCtrl.js');

const getCompanyClientsByNameHandler = async (req, res) => {
    const { name } = req.query;  

    try {
        const companyClientsByName = await getCompanyClientsByNameCtrl(name);

        if (!companyClientsByName) {
            return res.status(404).send(`No client found with name: "${name}"`);
        }

        res.status(200).send(companyClientsByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCompanyClientsByNameHandler;