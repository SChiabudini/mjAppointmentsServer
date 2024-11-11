require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getCompanyClientsCtrl = async () => {
    const companyClients = await CompanyClient.find()
    .populate('vehicles')
    .populate('serviceSheets')
    .populate('procedureSheets');;

    return companyClients;
};

module.exports = getCompanyClientsCtrl;