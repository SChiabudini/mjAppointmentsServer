require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const putCompanyClientRemoveServiceSheetCtrl = async (_id, sheetId) => {

    const updatedCompanyClient = await CompanyClient.findOneAndUpdate(
        { _id: _id },
        { $pull: { serviceSheets: sheetId } },
        { new: true }
    );

    return updatedCompanyClient;
};

module.exports = putCompanyClientRemoveServiceSheetCtrl;