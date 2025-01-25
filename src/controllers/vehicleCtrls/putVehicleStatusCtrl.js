require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleStatusCtrl = async (_id) => {

    const vehicle = await Vehicle.findById(_id);
    const newStatus = !vehicle.active;

    const updatedStatus = await Vehicle.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putVehicleStatusCtrl;