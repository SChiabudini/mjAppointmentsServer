require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const putCompanyClientAddProcedureSheetCtrl = async (_id, procedureSheetId) => {

    const updatedCompanyClient = await CompanyClient.updateOne(
        {_id},
        { $push: { procedureSheets: procedureSheetId } }
    );

    return updatedCompanyClient;
};

module.exports = putCompanyClientAddProcedureSheetCtrl;