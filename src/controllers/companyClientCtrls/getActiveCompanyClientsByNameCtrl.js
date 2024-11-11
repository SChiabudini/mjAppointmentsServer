require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getActiveCompanyClientsByNameCtrl = async (name) => {

  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  if (name) {

    const normalizedName = normalize(name);
    const regex = new RegExp(`.*${normalizedName}.*`, 'i');

    const activeCompanyClients = await CompanyClient.find({ name: regex, active: true })
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('procedureSheets');
    
    return activeCompanyClients;
  };
};

module.exports = getActiveCompanyClientsByNameCtrl; 