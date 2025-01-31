require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleRemoveMechanicalSheetCtrl = async (_id, sheetId) => {

    const updatedVehicle = await Vehicle.findOneAndUpdate(
        { _id: _id },
        { $pull: { mechanicalSheets: sheetId } },
        { new: true }
    );

    return updatedVehicle;
};

module.exports = putVehicleRemoveMechanicalSheetCtrl;