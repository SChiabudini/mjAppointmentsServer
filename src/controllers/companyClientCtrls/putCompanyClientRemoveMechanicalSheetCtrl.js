require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const putCompanyClientRemoveMechanicalSheetCtrl = async (_id, sheetId) => {

    const updatedCompanyClient = await CompanyClient.findOneAndUpdate(
        { _id: _id },
        { $pull: { mechanicalSheets: sheetId } },
        { new: true }
    );

    return updatedCompanyClient;
};

module.exports = putCompanyClientRemoveMechanicalSheetCtrl;