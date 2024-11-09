const Vehicle = require('../../collections/Vehicle.js');
const putPersonClientAddVehicleCtrl = require('../personClientCtrls/putPersonClientAddVehicleCtrl.js');
const putCompanyClientAddVehicleCtrl = require('../companyClientCtrls/putCompanyClientAddVehicleCtrl.js');

const postVehicleCtrl = async (licensePlate, brand, model, year, engine, personClient, companyClient) => {

    const newVehicle = {
        licensePlate,
        brand,
        model,
        year,
        engine,
        personClient,
        companyClient
    };

    const createdVehicle = await Vehicle.create(newVehicle);

    if(personClient){
        await putPersonClientAddVehicleCtrl(personClient, createdVehicle._id);
    }

    if(companyClient){
        await putCompanyClientAddVehicleCtrl(companyClient, createdVehicle._id);
    }

    return createdVehicle;
};

module.exports = postVehicleCtrl;