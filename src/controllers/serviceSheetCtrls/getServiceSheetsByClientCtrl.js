require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getServiceSheetsByClientCtrl = async (client) => {

  const normalizeString = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(normalizeString(client), 'i');

  const serviceSheets = await ServiceSheet.find()
    .populate('personClient', 'name')
    .populate('companyClient', 'name')
    .populate('vehicle');

  return serviceSheets.filter(
    (serviceSheet) =>
      (serviceSheet.personClient && regex.test(normalizeString(serviceSheet.personClient.name))) ||
      (serviceSheet.companyClient && regex.test(normalizeString(serviceSheet.companyClient.name)))
  );
};

module.exports = getServiceSheetsByClientCtrl; 