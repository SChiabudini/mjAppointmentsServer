require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');
const putPersonClientAddVehicleCtrl = require('../personClientCtrls/putPersonClientAddVehicleCtrl.js');
const putCompanyClientAddVehicleCtrl = require('../companyClientCtrls/putCompanyClientAddVehicleCtrl.js');

const putVehicleCtrl = async (_id, licensePlate, brand, model, year, engine, personClient, companyClient) => {

    const update = {};

    if (licensePlate !== null && licensePlate !== false) {
        update.licensePlate = licensePlate;
    };

    if (brand !== null && brand !== false) {
        update.brand = brand;
    };

    if (model !== null && model !== false) {
        update.model = model;
    };

    if (year !== null && year !== false) {
        update.year = year;
    };

    if (engine !== null && engine !== false) {
        update.engine = engine;
    };

    if (personClient !== undefined) {
        if (personClient !== null) {
            await putPersonClientAddVehicleCtrl(personClient, _id); // Asigna vehículo al cliente
        }
        update.personClient = personClient; // Puede ser null
    }

    if (companyClient !== undefined) {
        if (companyClient !== null) {
            await putCompanyClientAddVehicleCtrl(companyClient, _id); 
        }
        update.companyClient = companyClient;
    }

    try {
        // Realiza la actualización en la base de datos
        const updatedVehicle = await Vehicle.updateOne({ _id }, update, { new: true });

        if (!updatedVehicle) {
            throw new Error("Vehicle not found");
        };

        return updatedVehicle;

    } catch (error) {
        console.error("Error updating vehicle:", error);
        throw error;
    };

};

module.exports = putVehicleCtrl;