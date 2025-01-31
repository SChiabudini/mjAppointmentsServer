require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleRemoveCompanyClientCtrl = async (_id) => {

    const updatedVehicle = await Vehicle.updateOne(
        {_id},
        { $set: { companyClient: null }}
    );

    return updatedVehicle;
};

module.exports = putVehicleRemoveCompanyClientCtrl;