require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');
const putPersonClientAddVehicleCtrl = require('../personClientCtrls/putPersonClientAddVehicleCtrl.js');
const putCompanyClientAddVehicleCtrl = require('../companyClientCtrls/putCompanyClientAddVehicleCtrl.js');
const putPersonClientRemoveVehicleCtrl = require('../personClientCtrls/putPersonClientRemoveVehicleCtrl.js');
const putCompanyClientRemoveVehicleCtrl = require('../companyClientCtrls/putCompanyClientRemoveVehicleCtrl.js');
const getVehicleByIdCtrl = require('./getVehicleByIdCtrl.js');

const putVehicleCtrl = async (_id, licensePlate, brand, model, year, engine, personClient, companyClient) => {

    const oldVehicle = await getVehicleByIdCtrl(_id);

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
        update.personClient = personClient; // Puede ser null
    }

    if (companyClient !== undefined) {
        update.companyClient = companyClient;
    }

    try {
        // Realiza la actualización en la base de datos
        const updatedVehicle = await Vehicle.findOneAndUpdate({ _id }, update, { new: true });

        if (!updatedVehicle) {
            throw new Error("Vehicle not found");
        };

        // Lógica para manejar cambios en personClient
        if (personClient !== undefined) {
            if (personClient !== oldVehicle.personClient) {
                // Si el personClient ha cambiado, elimina el vehículo del antiguo cliente
                if (oldVehicle.personClient) {
                    await putPersonClientRemoveVehicleCtrl(oldVehicle.personClient, _id);
                }
                // Asigna el vehículo al nuevo cliente
                if (personClient) {
                    await putPersonClientAddVehicleCtrl(personClient, _id);
                }
            }
        }

        // Lógica para manejar cambios en companyClient
        if (companyClient !== undefined) {
            if (companyClient !== oldVehicle.companyClient) {
                // Si el companyClient ha cambiado, elimina el vehículo del antiguo cliente
                if (oldVehicle.companyClient) {
                    await putCompanyClientRemoveVehicleCtrl(oldVehicle.companyClient, _id);
                }
                // Asigna el vehículo al nuevo cliente
                if (companyClient) {
                    await putCompanyClientAddVehicleCtrl(companyClient, _id);
                }
            }
        }

        return updatedVehicle;

    } catch (error) {
        console.error("Error updating vehicle:", error);
        throw error;
    };

};

module.exports = putVehicleCtrl;