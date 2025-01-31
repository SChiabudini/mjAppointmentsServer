require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');
const putPersonClientAddMechanicalSheetCtrl = require('../personClientCtrls/putPersonClientAddMechanicalSheetCtrl.js');
const putCompanyClientAddMechanicalSheetCtrl = require('../companyClientCtrls/putCompanyClientAddMechanicalSheetCtrl.js');
const putVehicleAddMechanicalSheetCtrl = require('../vehicleCtrls/putVehicleAddMechanicalSheetCtrl.js');
const putPersonClientRemoveMechanicalSheetCtrl = require('../personClientCtrls/putPersonClientRemoveMechanicalSheetCtrl.js');
const putCompanyClientRemoveMechanicalSheetCtrl = require('../companyClientCtrls/putCompanyClientRemoveMechanicalSheetCtrl.js');
const putVehicleRemoveMechanicalSheetCtrl = require('../vehicleCtrls/putVehicleRemoveMechanicalSheetCtrl.js');
const getMechanicalSheetByIdCtrl = require('./getMechanicalSheetByIdCtrl.js');

const putMechanicalSheetCtrl = async (_id, date, personClient, companyClient, vehicle, kilometers, keyWords, description, amount) => {


    const oldMechanicalSheet = await getMechanicalSheetByIdCtrl(_id);

    const update = {};

    if (date !== undefined) {
        update.date = date;
    };

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

        // Comparar y actualizar personClient
        if (personClient !== undefined) {
            const oldPersonClient = oldMechanicalSheet.personClient ? oldMechanicalSheet.personClient : null;
            const newPersonClient = personClient ? personClient : null;

            if (oldPersonClient !== newPersonClient) {
                // Eliminar la hoja de servicio del antiguo personClient
                if (oldPersonClient) {
                    await putPersonClientRemoveMechanicalSheetCtrl(oldPersonClient, _id);
                }
                // Añadir la hoja de servicio al nuevo personClient
                if (newPersonClient) {
                    await putPersonClientAddMechanicalSheetCtrl(newPersonClient, _id);
                }
            }
        }

        // Comparar y actualizar companyClient
        if (companyClient !== undefined) {
            const oldCompanyClient = oldMechanicalSheet.companyClient ? oldMechanicalSheet.companyClient : null;
            const newCompanyClient = companyClient ? companyClient : null;

            if (oldCompanyClient !== newCompanyClient) {
                // Eliminar la hoja de servicio del antiguo companyClient
                if (oldCompanyClient) {
                    await putCompanyClientRemoveMechanicalSheetCtrl(oldCompanyClient, _id);
                }
                // Añadir la hoja de servicio al nuevo companyClient
                if (newCompanyClient) {
                    await putCompanyClientAddMechanicalSheetCtrl(newCompanyClient, _id);
                }
            }
        }

        // Comparar y actualizar vehicle
        if (vehicle !== null && vehicle !== false) {
            const oldVehicle = oldMechanicalSheet.vehicle ? oldMechanicalSheet.vehicle : null;
            const newVehicle = vehicle ? vehicle : null;

            if (oldVehicle !== newVehicle) {
                // Eliminar la hoja de servicio del antiguo vehicle
                if (oldVehicle) {
                    await putVehicleRemoveMechanicalSheetCtrl(oldVehicle, _id);
                }
                // Añadir la hoja de servicio al nuevo vehicle
                if (newVehicle) {
                    await putVehicleAddMechanicalSheetCtrl(newVehicle, _id);
                }
            }
        }

        return updatedMechanicalSheet;

    } catch (error) {
        console.error("Error updating mechanical sheet:", error);
        throw error;
    };

};

module.exports = putMechanicalSheetCtrl;