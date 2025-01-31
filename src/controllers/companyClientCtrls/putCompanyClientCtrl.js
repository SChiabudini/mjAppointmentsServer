require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');
const getCompanyClientByIdCtrl = require('./getCompanyClientByIdCtrl.js');
const putVehicleAddCompanyClientCtrl = require('../../controllers/vehicleCtrls/putVehicleAddCompanyClientCtrl.js');
const putVehicleRemoveCompanyClientCtrl = require('../../controllers/vehicleCtrls/putVehicleRemoveCompanyClientCtrl.js');

const putCompanyClientCtrl = async (_id, cuit, name, email, phoneWsp, phones, address, vehicles) => {

    const oldCompanyClient = await getCompanyClientByIdCtrl(_id);

    const update = {};

    if (cuit !== null && cuit !== false) {
        update.cuit = cuit;
    };

    if (name !== null && name !== false) {
        update.name = name;
    };

    if (email !== null && email !== false) {
        update.email = email;
    };

    if (phoneWsp !== null && phoneWsp !== false) {
        update.phoneWsp = phoneWsp;
    };

    if (phones !== undefined && phones !== null) {
        update.phones = phones;
    };

    if (address !== null && address !== false) {
        update.address = address;
    };

    if (vehicles !== undefined && vehicles !== null) {
        update.vehicles = vehicles;
    };

    try {
        // Realiza la actualización en la base de datos
        const updatedCompanyClient = await CompanyClient.updateOne({ _id }, update, { new: true });

        if (!updatedCompanyClient) {
            throw new Error("Company not found");
        };

        // Comparar los arrays de vehículos
        const oldVehicles = oldCompanyClient.vehicles || [];
        const newVehicles = vehicles || [];

        // Extraer los _id de los vehículos antiguos y nuevos
        const oldVehicleIds = oldVehicles.map(vehicle => vehicle._id.toString());
        const newVehicleIds = newVehicles.map(vehicle => vehicle._id.toString());

        // Encontrar vehículos añadidos
        const addedVehicles = newVehicleIds.filter(vehicleId => !oldVehicleIds.includes(vehicleId));

        // Encontrar vehículos eliminados
        const removedVehicles = oldVehicleIds.filter(vehicleId => !newVehicleIds.includes(vehicleId));

        // Añadir vehículos nuevos
        for (const vehicleId of addedVehicles) {
            await putVehicleAddCompanyClientCtrl(vehicleId, _id);
        }

        // Eliminar vehículos que ya no están
        for (const vehicleId of removedVehicles) {
            await putVehicleRemoveCompanyClientCtrl(vehicleId);
        }

        return updatedCompanyClient;

    } catch (error) {
        console.error("Error updating the company:", error);
        throw error;
    };

};

module.exports = putCompanyClientCtrl;