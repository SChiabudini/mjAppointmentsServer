const getActivePersonClientsCtrl = require('../../controllers/personClientCtrls/getActivePersonClientsCtrl.js');

const getActivePersonClientsHandler = async (req, res) => {

    try {
        const activePersonClients = await getActivePersonClientsCtrl();

        res.status(200).send(activePersonClients);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getActivePersonClientsHandler;