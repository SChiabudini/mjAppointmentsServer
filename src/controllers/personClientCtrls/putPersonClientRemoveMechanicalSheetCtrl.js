require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const putPersonClientRemoveMechanicalSheetCtrl = async (_id, sheetId) => {

    const updatedPersonClient = await PersonClient.findOneAndUpdate(
        { _id: _id },
        { $pull: { mechanicalSheets: sheetId } },
        { new: true }
    );

    return updatedPersonClient;
};

module.exports = putPersonClientRemoveMechanicalSheetCtrl;