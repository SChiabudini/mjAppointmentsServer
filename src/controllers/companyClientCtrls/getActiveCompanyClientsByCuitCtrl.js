require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getActiveCompanyClientsByDniCtrl = async (cuit) => {

  const regex = new RegExp(`.*${cuit}.*`, 'i');

  if (cuit) {
    const activeCompanyClients = await CompanyClient.find({ cuit: regex, active: true })
    .populate('vehicles');
    
    return activeCompanyClients;
  };
};

module.exports = getActiveCompanyClientsByDniCtrl; 