require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');
const Vehicle = require('../../collections/Vehicle.js');

const getPersonClientsByVehiclesCtrl = async (_id) => {
    try {
        // Encuentra el personClient por ID
        const personClient = await PersonClient.findOne({ _id });

        // Si no se encuentra el PersonClient, lanzamos un error
        if (!personClient) {
            throw new Error('Cliente (persona) no encontrado');
        }

        // Si tiene vehículos asociados, los buscamos en la colección de Vehicle
        if (personClient.vehicles && personClient.vehicles.length > 0) {
            // Buscamos todos los vehículos cuyo _id esté en el array de `vehicles` de personClient
            const vehicles = await Vehicle.find({ '_id': { $in: personClient.vehicles } });

            return vehicles; // Retornamos los vehículos encontrados
        }

        // Si no tiene vehículos asociados, devolvemos un array vacío
        return [];
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
}

module.exports = getPersonClientsByVehiclesCtrl;
