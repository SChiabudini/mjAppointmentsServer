require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const putPersonClientAddVehicleCtrl = async (_id, vehicleId) => {

    const updatedPersonClient = await PersonClient.updateOne(
        {_id},
        { $push: { vehicles: vehicleId } }
    );

    return updatedPersonClient;
};

module.exports = putPersonClientAddVehicleCtrl;