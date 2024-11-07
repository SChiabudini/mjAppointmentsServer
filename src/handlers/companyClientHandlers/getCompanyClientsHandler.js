const getCompanyClientsCtrl = require('../../controllers/companyClientCtrls/getCompanyClientsCtrl.js');

const getCompanyClientsHandler = async (req, res) => {

    try {
        const companyClients = await getCompanyClientsCtrl();

        res.status(200).send(companyClients);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getCompanyClientsHandler;