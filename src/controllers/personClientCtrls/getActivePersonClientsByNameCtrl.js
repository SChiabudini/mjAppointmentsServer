require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getActivePersonClientsByNameCtrl = async (name) => {
  
  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  if (name) {

    const normalizedName = normalize(name);
    const regex = new RegExp(`.*${normalizedName}.*`, 'i');

    const activePersonClients = await PersonClient.find({ name: regex, active: true })
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('mechanicalSheets');

    return activePersonClients;
  };
};

module.exports = getActivePersonClientsByNameCtrl; 