require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getActiveMechanicalSheetsByClientCtrl = async (client) => {

  const normalizeString = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(normalizeString(client), 'i');

  const mechanicalSheets = await MechanicalSheet.find({ active: true })
    .populate('personClient', 'name')
    .populate('companyClient', 'name')
    .populate('vehicle');

  return mechanicalSheets.filter(
    (mechanicalSheet) =>
      (mechanicalSheet.personClient && regex.test(normalizeString(mechanicalSheet.personClient.name))) ||
      (mechanicalSheet.companyClient && regex.test(normalizeString(mechanicalSheet.companyClient.name)))
  );
};

module.exports = getActiveMechanicalSheetsByClientCtrl; 