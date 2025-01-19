require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getPersonClientByIdCtrl = async (_id) => {

  if (_id) {
    const personClientById = await PersonClient.findOne({ _id })
    .populate('mechanicalSheets')
    .populate('serviceSheets')
    .populate('vehicles');

    return personClientById;
  };

};

module.exports = getPersonClientByIdCtrl;   