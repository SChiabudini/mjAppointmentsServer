require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getCompanyClientsCtrl = async () => {
    const companyClients = await CompanyClient.find();

    return companyClients;
};

module.exports = getCompanyClientsCtrl;