require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const putCompanyClientAddMechanicalSheetCtrl = async (_id, mechanicalSheetId) => {

    const updatedCompanyClient = await CompanyClient.updateOne(
        {_id},
        { $push: { mechanicalSheets: mechanicalSheetId } }
    );

    return updatedCompanyClient;
};

module.exports = putCompanyClientAddMechanicalSheetCtrl;