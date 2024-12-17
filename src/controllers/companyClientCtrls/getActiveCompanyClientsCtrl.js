require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getActiveCompanyClientsCtrl = async () => {
    const activeCompanyClients = await CompanyClient.find({ active: true })
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('mechanicalSheets');;

    return activeCompanyClients;
};

module.exports = getActiveCompanyClientsCtrl;