require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');
const putPersonClientAddServiceSheetCtrl = require('../personClientCtrls/putPersonClientAddServiceSheetCtrl.js');
const putCompanyClientAddServiceSheetCtrl = require('../companyClientCtrls/putCompanyClientAddServiceSheetCtrl.js');
const putVehicleAddServiceSheetCtrl = require('../vehicleCtrls/putVehicleAddServiceSheetCtrl.js');
const putPersonClientRemoveServiceSheetCtrl = require('../personClientCtrls/putPersonClientRemoveServiceSheetCtrl.js');
const putCompanyClientRemoveServiceSheetCtrl = require('../companyClientCtrls/putCompanyClientRemoveServiceSheetCtrl.js');
const putVehicleRemoveServiceSheetCtrl = require('../vehicleCtrls/putVehicleRemoveServiceSheetCtrl.js');
const getServiceSheetByIdCtrl = require('./getServiceSheetByIdCtrl.js');

const putServiceSheetCtrl = async (
    _id,
    date,
    personClient,
    companyClient,
    vehicle,
    kilometers,
    kmsToNextService,
    oil,
    filters,
    notes,
    amount
) => {
    const oldServiceSheet = await getServiceSheetByIdCtrl(_id);

    const update = {};

    if (date !== undefined) {
        update.date = date;
    }

    if (personClient !== undefined) {
        update.personClient = personClient;
    }

    if (companyClient !== undefined) {
        update.companyClient = companyClient;
    }

    if (vehicle !== null && vehicle !== false) {
        update.vehicle = vehicle;
    }

    if (kilometers !== null && kilometers !== false) {
        update.kilometers = kilometers;
    }

    if (kmsToNextService !== null && kmsToNextService !== false) {
        update.kmsToNextService = kmsToNextService;
    }

    if (oil !== null && oil !== false) {
        update.oil = oil;
    }

    if (filters !== null && filters !== false) {
        update.filters = filters;
    }

    if (notes !== null && notes !== false) {
        update.notes = notes;
    }

    if (amount !== null && amount !== false) {
        update.amount = amount;
    }

    try {
        // Actualiza la hoja de servicio
        const updatedServiceSheet = await ServiceSheet.updateOne({ _id }, update, { new: true });

        if (!updatedServiceSheet) {
            throw new Error("ServiceSheet not found");
        }

        // Comparar y actualizar personClient
        if (personClient !== undefined) {
            const oldPersonClient = oldServiceSheet.personClient ? oldServiceSheet.personClient : null;
            const newPersonClient = personClient ? personClient : null;

            if (oldPersonClient !== newPersonClient) {
                // Eliminar la hoja de servicio del antiguo personClient
                if (oldPersonClient) {
                    await putPersonClientRemoveServiceSheetCtrl(oldPersonClient, _id);
                }
                // Añadir la hoja de servicio al nuevo personClient
                if (newPersonClient) {
                    await putPersonClientAddServiceSheetCtrl(newPersonClient, _id);
                }
            }
        }

        // Comparar y actualizar companyClient
        if (companyClient !== undefined) {
            const oldCompanyClient = oldServiceSheet.companyClient ? oldServiceSheet.companyClient : null;
            const newCompanyClient = companyClient ? companyClient : null;

            if (oldCompanyClient !== newCompanyClient) {
                // Eliminar la hoja de servicio del antiguo companyClient
                if (oldCompanyClient) {
                    await putCompanyClientRemoveServiceSheetCtrl(oldCompanyClient, _id);
                }
                // Añadir la hoja de servicio al nuevo companyClient
                if (newCompanyClient) {
                    await putCompanyClientAddServiceSheetCtrl(newCompanyClient, _id);
                }
            }
        }

        // Comparar y actualizar vehicle
        if (vehicle !== null && vehicle !== false) {
            const oldVehicle = oldServiceSheet.vehicle ? oldServiceSheet.vehicle : null;
            const newVehicle = vehicle ? vehicle : null;

            if (oldVehicle !== newVehicle) {
                // Eliminar la hoja de servicio del antiguo vehicle
                if (oldVehicle) {
                    await putVehicleRemoveServiceSheetCtrl(oldVehicle, _id);
                }
                // Añadir la hoja de servicio al nuevo vehicle
                if (newVehicle) {
                    await putVehicleAddServiceSheetCtrl(newVehicle, _id);
                }
            }
        }

        return updatedServiceSheet;

    } catch (error) {
        console.error("Error updating service sheet:", error);
        throw error;
    }
};

module.exports = putServiceSheetCtrl;