require('../../db.js');
const Appointment = require('../../collections/Appointment.js');

const putAppointmentCtrl = async (_id, start, end, personClient, companyClient, vehicle, procedure) => {

    const update = {};

    if (start !== null && start !== false) {
        update.start = start;
    };

    if (end !== null && end !== false) {
        update.end = end;
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

    if (procedure !== null && procedure !== false) {
        update.procedure = procedure;
    };

    try {
        // Realiza la actualización en la base de datos
        const updatedAppointment = await Appointment.updateOne({ _id }, update, { new: true });

        if (!updatedAppointment) {
            throw new Error("Appointment not found");
        };

        return updatedAppointment;

    } catch (error) {
        console.error("Error updating appointment:", error);
        throw error;
    };

};

module.exports = putAppointmentCtrl;