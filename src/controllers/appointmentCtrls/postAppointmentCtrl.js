const Appointment = require('../../collections/Appointment.js');

const postAppointmentCtrl = async ( start, end, personClient, companyClient, vehicle, procedure ) => {    

    const newAppointment = {
        start,
        end,
        personClient,
        companyClient,
        vehicle,
        procedure
    };

    const createdAppointment = await Appointment.create(newAppointment);

    return createdAppointment;
};

module.exports = postAppointmentCtrl;