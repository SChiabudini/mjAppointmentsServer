require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const putCompanyClientCtrl = async (_id, cuit, name, email, phones, address, vehicles ) => {

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

        return updatedCompanyClient;

    } catch (error) {
        console.error("Error updating the company:", error);
        throw error;
    };

};

module.exports = putCompanyClientCtrl;