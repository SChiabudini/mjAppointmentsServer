require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const putPersonClientAddProcedureSheetCtrl = async (_id, procedureSheetId) => {

    const updatedPersonClient = await PersonClient.updateOne(
        {_id},
        { $push: { procedureSheets: procedureSheetId } }
    );

    return updatedPersonClient;
};

module.exports = putPersonClientAddProcedureSheetCtrl;