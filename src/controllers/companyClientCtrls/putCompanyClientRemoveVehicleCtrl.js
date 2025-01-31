require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const putCompanyClientAddVehicleCtrl = async (_id, vehicleId) => {

    const updatedCompanyClient = await CompanyClient.findOneAndUpdate(
        { _id: _id },
        { $pull: { vehicles: vehicleId } },
        { new: true }
    );

    return updatedCompanyClient;
};

module.exports = putCompanyClientAddVehicleCtrl;