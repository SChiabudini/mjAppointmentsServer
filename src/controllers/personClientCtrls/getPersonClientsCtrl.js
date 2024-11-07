require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getPersonClientsCtrl = async () => {
    const personClients = await PersonClient.find().populate('vehicles');

    return personClients;
};

module.exports = getPersonClientsCtrl;