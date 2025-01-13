require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const putServiceSheetCtrl = async (_id, personClient, companyClient, vehicle, kilometers, kmsToNextService, oil, filters, notes, amount) => {

    const update = {};

    if (personClient !== undefined) {
        update.personClient = personClient;
    };

    if (companyClient !== undefined) {
        update.companyClient = companyClient;
    };

    if (vehicle !== null && vehicle !== false) {
        update.vehicle = vehicle;
    };

    if (kilometers !== null && kilometers !== false) {
        update.kilometers = kilometers;
    };

    if (kmsToNextService !== null && kmsToNextService !== false) {
        update.kmsToNextService = kmsToNextService;
    };

    if (oil !== null && oil !== false) {
        update.oil = oil;
    };

    if (filters !== null && filters !== false) {
        update.filters = filters;
    };

    if (notes !== null && notes !== false) {
        update.notes = notes;
    };

    if (amount !== null && amount !== false) {
        update.amount = amount;
    };

    try {
        const updatedServiceSheet = await ServiceSheet.updateOne({ _id }, update, { new: true });

        if (!updatedServiceSheet) {
            throw new Error("ServiceSheet not found");
        };

        return updatedServiceSheet;

    } catch (error) {
        console.error("Error updating service sheet:", error);
        throw error;
    };

};

module.exports = putServiceSheetCtrl;