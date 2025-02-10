require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getActiveServiceSheetsByClientCtrl = async (client) => {

  const normalizeString = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(normalizeString(client), 'i');

  const serviceSheets = await ServiceSheet.find({ active: true })
    .populate('personClient', 'name normalizedName')
    .populate('companyClient', 'name normalizedName')
    .populate('vehicle');


  return serviceSheets.filter((serviceSheet) => {
      const personClient = serviceSheet.personClient;
      const companyClient = serviceSheet.companyClient;
  
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

module.exports = getActiveServiceSheetsByClientCtrl; 