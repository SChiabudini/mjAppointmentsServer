const getPersonClientsCtrl = require('../../controllers/personClientCtrls/getPersonClientsCtrl.js');

const getPersonClientsHandler = async (req, res) => {

    try {
        const personClients = await getPersonClientsCtrl();

        res.status(200).send(personClients);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getPersonClientsHandler;