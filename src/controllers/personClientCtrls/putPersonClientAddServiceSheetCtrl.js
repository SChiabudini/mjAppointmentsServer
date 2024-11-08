require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const putPersonClientAddServiceSheetCtrl = async (_id, serviceSheetId) => {

    const updatedPersonClient = await PersonClient.updateOne(
        {_id},
        { $push: { serviceSheets: serviceSheetId } }
    );

    return updatedPersonClient;
};

module.exports = putPersonClientAddServiceSheetCtrl;