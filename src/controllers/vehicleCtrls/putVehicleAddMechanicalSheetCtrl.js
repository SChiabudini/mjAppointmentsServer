require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleAddMechanicalSheetCtrl = async (_id, mechanicalSheetId) => {

    const updatedVehicle = await Vehicle.updateOne(
        {_id},
        { $push: { mechanicalSheets: mechanicalSheetId } }
    );

    return updatedVehicle;
};

module.exports = putVehicleAddMechanicalSheetCtrl;