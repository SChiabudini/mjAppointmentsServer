const Appointment = require('../../collections/Appointment.js');

const postAppointmentCtrl = async ( start, end, personClient, companyClient, vehicle, mechanical, service, procedure ) => {

    const newAppointment = {
        start,
        end,
        personClient,
        companyClient,
        vehicle,
        mechanical,
        service,
        procedure
    };

    const createdAppointment = await Appointment.create(newAppointment);

    return createdAppointment;
};

module.exports = postAppointmentCtrl;