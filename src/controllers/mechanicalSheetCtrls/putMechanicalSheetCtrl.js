require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const putMechanicalSheetCtrl = async (_id, personClient, companyClient, vehicle, kilometers, keyWords, description, amount) => {

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

    if (keyWords !== null && keyWords !== false) {
        update.keyWords = keyWords;
    };

    if (description !== null && description !== false) {
        update.description = description;
    };

    if (amount !== null && amount !== false) {
        update.amount = amount;
    };

    try {
        const updatedMechanicalSheet = await MechanicalSheet.updateOne({ _id }, update, { new: true });

        if (!updatedMechanicalSheet) {
            throw new Error("MechanicalSheet not found");
        };

        return updatedMechanicalSheet;

    } catch (error) {
        console.error("Error updating mechanical sheet:", error);
        throw error;
    };

};

module.exports = putMechanicalSheetCtrl;