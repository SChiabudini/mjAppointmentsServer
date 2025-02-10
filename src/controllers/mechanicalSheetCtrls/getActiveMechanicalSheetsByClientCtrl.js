require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getActiveMechanicalSheetsByClientCtrl = async (client) => {

  const normalizeString = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(normalizeString(client), 'i');

  const mechanicalSheets = await MechanicalSheet.find({ active: true })
  .populate('personClient', 'name normalizedName')
  .populate('companyClient', 'name normalizedName')
  .populate('vehicle');

    return mechanicalSheets.filter((mechanicalSheet) => {
      const personClient = mechanicalSheet.personClient;
      const companyClient = mechanicalSheet.companyClient;
  
      return (
        (personClient &&
          (regex.test(normalizeString(personClient.name)) ||
            (personClient.normalizedName && regex.test(personClient.normalizedName)))) ||
        (companyClient &&
          (regex.test(normalizeString(companyClient.name)) ||
            (companyClient.normalizedName && regex.test(companyClient.normalizedName))))
      );
    });
};

module.exports = getActiveMechanicalSheetsByClientCtrl; 