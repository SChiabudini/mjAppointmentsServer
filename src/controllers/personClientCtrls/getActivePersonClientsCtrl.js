require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getActivePersonClientsCtrl = async () => {
    const activePersonClients = await PersonClient.find({ active: true })
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('procedureSheets');

    return activePersonClients;
};

module.exports = getActivePersonClientsCtrl;