const Vehicle = require('../../collections/Vehicle.js');

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

    return createdVehicle;
};

module.exports = postVehicleCtrl;