require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const putPersonClientAddMechanicalSheetCtrl = async (_id, mechanicalSheetId) => {

    const updatedPersonClient = await PersonClient.updateOne(
        {_id},
        { $push: { mechanicalSheets: mechanicalSheetId } }
    );

    return updatedPersonClient;
};

module.exports = putPersonClientAddMechanicalSheetCtrl;