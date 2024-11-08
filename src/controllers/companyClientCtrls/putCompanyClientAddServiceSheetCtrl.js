require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const putCompanyClientAddServiceSheetCtrl = async (_id, serviceSheetId) => {

    const updatedCompanyClient = await CompanyClient.updateOne(
        {_id},
        { $push: { serviceSheets: serviceSheetId } }
    );

    return updatedCompanyClient;
};

module.exports = putCompanyClientAddServiceSheetCtrl;