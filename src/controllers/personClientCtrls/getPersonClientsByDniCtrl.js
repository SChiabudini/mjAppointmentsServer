require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getPersonClientsByDniCtrl = async (dni) => {

  const regex = new RegExp(`.*${dni}.*`, 'i');

  if (dni) {
    const personClients = await PersonClient.find({ dni: regex }).populate('vehicles');;
    return personClients;
  };
};

module.exports = getPersonClientsByDniCtrl; 