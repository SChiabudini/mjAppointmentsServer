require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleAddServiceSheetCtrl = async (_id, serviceSheetId) => {

    const updatedVehicle = await Vehicle.updateOne(
        {_id},
        { $push: { serviceSheets: serviceSheetId } }
    );

    return updatedVehicle;
};

module.exports = putVehicleAddServiceSheetCtrl;