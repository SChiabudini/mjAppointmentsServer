require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleAddProcedureSheetCtrl = async (_id, procedureSheetId) => {

    const updatedVehicle = await Vehicle.updateOne(
        {_id},
        { $push: { procedureSheets: procedureSheetId } }
    );

    return updatedVehicle;
};

module.exports = putVehicleAddProcedureSheetCtrl;