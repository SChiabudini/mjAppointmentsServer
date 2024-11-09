require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const putCompanyClientAddVehicleCtrl = async (_id, vehicleId) => {

    const updatedCompanyClient = await CompanyClient.updateOne(
        {_id},
        { $push: { vehicles: vehicleId } }
    );

    return updatedCompanyClient;
};

module.exports = putCompanyClientAddVehicleCtrl;