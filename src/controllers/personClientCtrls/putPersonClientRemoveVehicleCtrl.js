require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const putPersonClientRemoveVehicleCtrl = async (_id, vehicleId) => {

    const updatedPersonClient = await PersonClient.findOneAndUpdate(
        { _id: _id },
        { $pull: { vehicles: vehicleId } },
        { new: true }
    );

    return updatedPersonClient;
};

module.exports = putPersonClientRemoveVehicleCtrl;