require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getPersonClientsByNameCtrl = async (name) => {

  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  if (name) {
    
    const normalizedName = normalize(name);
    const regex = new RegExp(`.*${normalizedName}.*`, 'i');

    const personClients = await PersonClient.find({ name: regex })
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('procedureSheets');
    
    return personClients;
  };
};

module.exports = getPersonClientsByNameCtrl; 