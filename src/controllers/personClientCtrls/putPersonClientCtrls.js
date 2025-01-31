require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');
const getPersonClientByIdCtrl = require('./getPersonClientByIdCtrl.js');
const putVehicleAddPersonClientCtrl = require('../../controllers/vehicleCtrls/putVehicleAddPersonClientCtrl.js');
const putVehicleRemovePersonClientCtrl = require('../../controllers/vehicleCtrls/putVehicleRemovePersonClientCtrl.js');

const putPersonClientCtrl = async (_id, dni, name, email, phoneWsp, phones, cuilCuit, vehicles ) => {

    const oldPersonClient = await getPersonClientByIdCtrl(_id);

    const update = {};

    if (dni !== null && dni !== false) {
        update.dni = dni;
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

    if (cuilCuit !== null && cuilCuit !== false) {
        update.cuilCuit = cuilCuit;
    };

    if (vehicles !== undefined && vehicles !== null) {
        update.vehicles = vehicles;
    };

    try {
        // Realiza la actualización en la base de datos
        const updatedPersonClient = await PersonClient.updateOne({ _id }, update, { new: true });

        if (!updatedPersonClient) {
            throw new Error("Client not found");
        };

        // Comparar los arrays de vehículos
        const oldVehicles = oldPersonClient.vehicles || [];
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
            await putVehicleAddPersonClientCtrl(vehicleId, _id);
        }

        // Eliminar vehículos que ya no están
        for (const vehicleId of removedVehicles) {
            await putVehicleRemovePersonClientCtrl(vehicleId);
        }

        return updatedPersonClient;

    } catch (error) {
        console.error("Error updating the client:", error);
        throw error;
    };

};

module.exports = putPersonClientCtrl;