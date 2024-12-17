require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getActivePersonClientsByDniCtrl = async (dni) => {

  const regex = new RegExp(`.*${dni}.*`, 'i');

  if (dni) {
    const activePersonClients = await PersonClient.find({ dni: regex, active: true })
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('mechanicalSheets');

    return activePersonClients;
  };
};

module.exports = getActivePersonClientsByDniCtrl; 