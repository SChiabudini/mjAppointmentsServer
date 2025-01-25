require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const putCompanyClientStatusCtrl = async (_id) => {

    const companyClient = await CompanyClient.findById(_id);
    const newStatus = !companyClient.active;

    const updatedStatus = await CompanyClient.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putCompanyClientStatusCtrl;