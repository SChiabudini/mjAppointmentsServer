require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getActiveCompanyClientsCtrl = async () => {
    const activeCompanyClients = await CompanyClient.find({ active: true })
    .populate('vehicles');

    return activeCompanyClients;
};

module.exports = getActiveCompanyClientsCtrl;