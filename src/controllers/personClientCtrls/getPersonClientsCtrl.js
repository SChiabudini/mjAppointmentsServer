require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getPersonClientsCtrl = async () => {
    const personClients = await PersonClient.find()
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('mechanicalSheets');
    
    return personClients;
};

module.exports = getPersonClientsCtrl;