require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getPersonClientsCtrl = async () => {
    const personClients = await PersonClient.find();

    return personClients;
};

module.exports = getPersonClientsCtrl;