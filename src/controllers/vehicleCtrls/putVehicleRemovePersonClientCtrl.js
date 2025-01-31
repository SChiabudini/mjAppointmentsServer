require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleRemovePersonClientCtrl = async (_id) => {

    const updatedVehicle = await Vehicle.updateOne(
        {_id},
        { $set: { personClient: null }}
    );

    return updatedVehicle;
};

module.exports = putVehicleRemovePersonClientCtrl;