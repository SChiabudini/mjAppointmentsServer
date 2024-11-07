require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getCompanyClientsByDniCtrl = async (cuit) => {

  const regex = new RegExp(`.*${cuit}.*`, 'i');

  if (cuit) {
    const companyClients = await CompanyClient.find({ cuit: regex }).populate('vehicles');;
    return companyClients;
  };
};

module.exports = getCompanyClientsByDniCtrl; 