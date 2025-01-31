require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleRemoveServiceSheetCtrl = async (_id, sheetId) => {

    const updatedVehicle = await Vehicle.findOneAndUpdate(
        { _id: _id },
        { $pull: { serviceSheets: sheetId } },
        { new: true }
    );

    return updatedVehicle;
};

module.exports = putVehicleRemoveServiceSheetCtrl;