require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getCompanyClientsByCuitCtrl = async (cuit) => {

  const regex = new RegExp(`.*${cuit}.*`, 'i');

  if (cuit) {
    const companyClients = await CompanyClient.find({ cuit: regex })
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('procedureSheets');
    return companyClients;
  };
};

module.exports = getCompanyClientsByCuitCtrl; 