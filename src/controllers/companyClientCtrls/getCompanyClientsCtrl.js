require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getCompanyClientsCtrl = async () => {
    const companyClients = await CompanyClient.find().populate('vehicles');

    return companyClients;
};

module.exports = getCompanyClientsCtrl;