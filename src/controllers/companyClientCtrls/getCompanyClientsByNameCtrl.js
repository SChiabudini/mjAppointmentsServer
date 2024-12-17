require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getCompanyClientsByNameCtrl = async (name) => {

  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  if (name) {

    const normalizedName = normalize(name);
    const regex = new RegExp(`.*${normalizedName}.*`, 'i');

    const companyClients = await CompanyClient.find({ name: regex })
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('mechanicalSheets');
    return companyClients;
  };
};

module.exports = getCompanyClientsByNameCtrl; 