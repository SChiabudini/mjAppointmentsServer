const Appointment = require('../../collections/Appointment.js');

const postAppointmentCtrl = async ( date, time, personClient, companyClient, vehicle, procedure ) => {

    const newAppointment = {
        date,
        time,
        personClient,
        companyClient,
        vehicle,
        procedure
    };

    const createdAppointment = await Appointment.create(newAppointment);

    return createdAppointment;
};

module.exports = postAppointmentCtrl;