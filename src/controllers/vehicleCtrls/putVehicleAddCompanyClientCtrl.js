require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const putVehicleAddCompanyClientCtrl = async (_id, companyClientId) => {

    const updatedVehicle = await Vehicle.updateOne(
        {_id},
        { $set: { companyClient: companyClientId, personClient: null }}
    );

    return updatedVehicle;
};

module.exports = putVehicleAddCompanyClientCtrl;