const getActiveCompanyClientsCtrl = require('../../controllers/companyClientCtrls/getActiveCompanyClientsCtrl.js');

const getActiveCompanyClientsHandler = async (req, res) => {

    try {
        const activeCompanyClients = await getActiveCompanyClientsCtrl();

        res.status(200).send(activeCompanyClients);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getActiveCompanyClientsHandler;