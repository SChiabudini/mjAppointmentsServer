const CompanyClient = require('../../collections/CompanyClient.js');
const putVehicleAddCompanyClientCtrl = require('../vehicleCtrls/putVehicleAddCompanyClientCtrl.js');

const postCompanyClientCtrl = async (cuit, name, email, phones, address, vehicles) => {

    const newCompanyClient = {
        cuit,
        name,
        email,
        phones,
        address,
        vehicles
    };

    const createdCompanyClient = await CompanyClient.create(newCompanyClient);

    if (vehicles && vehicles.length > 0) {
        for (const vehicle of vehicles) {
            await putVehicleAddCompanyClientCtrl(vehicle, createdCompanyClient._id);
        }
    }

    return createdCompanyClient;
};

module.exports = postCompanyClientCtrl;