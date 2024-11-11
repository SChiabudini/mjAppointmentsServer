require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getActiveCompanyClientsByCuitCtrl = async (cuit) => {

  const regex = new RegExp(`.*${cuit}.*`, 'i');

  if (cuit) {
    const activeCompanyClients = await CompanyClient.find({ cuit: regex, active: true })
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('procedureSheets');
    
    return activeCompanyClients;
  };
};

module.exports = getActiveCompanyClientsByCuitCtrl;