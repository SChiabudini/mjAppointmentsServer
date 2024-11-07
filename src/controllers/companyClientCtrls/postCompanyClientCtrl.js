const CompanyClient = require('../../collections/CompanyClient.js');

const postCompanyClientCtrl = async (cuit, name, email, phones, address) => {

    const newCompanyClient = {
        cuit,
        name,
        email,
        phones,
        address
    };

    const createdCompanyClient = await CompanyClient.create(newCompanyClient);

    return createdCompanyClient;
};

module.exports = postCompanyClientCtrl;