require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const putPersonClientRemoveServiceSheetCtrl = async (_id, sheetId) => {

    const updatedPersonClient = await PersonClient.findOneAndUpdate(
        { _id: _id },
        { $pull: { serviceSheets: sheetId } },
        { new: true }
    );

    return updatedPersonClient;
};

module.exports = putPersonClientRemoveServiceSheetCtrl;