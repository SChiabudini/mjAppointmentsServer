const getCompanyClientByIdCtrl = require('../../controllers/companyClientCtrls/getCompanyClientByIdCtrl');

const getCompanyClientByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const companyClientByID = await getCompanyClientByIdCtrl(id);

        if (!companyClientByID) {
            return res.status(404).send(`No company client found with ID: "${id}"`);
        }

        res.status(200).send(companyClientByID);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCompanyClientByIdHandler;