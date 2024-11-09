require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleAddPersonClientCtrl = async (_id, personClientId) => {

    const updatedVehicle = await Vehicle.updateOne(
        {_id},
        { $set: { personClient: personClientId }}
    );

    return updatedVehicle;
};

module.exports = putVehicleAddPersonClientCtrl;