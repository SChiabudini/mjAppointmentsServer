require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const putPersonClientCtrl = async (_id, dni, name, email, phones, phoneWsp, cuilCuit, vehicles ) => {

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

    if (phones !== undefined && phones !== null) {
        update.phones = phones;
    };

    if (phoneWsp !== null && phoneWsp !== false) {
        update.phoneWsp = phoneWsp;
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

        return updatedPersonClient;

    } catch (error) {
        console.error("Error updating the client:", error);
        throw error;
    };

};

module.exports = putPersonClientCtrl;