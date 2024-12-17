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
    console.log(newAppointment);


    const createdAppointment = await Appointment.create(newAppointment);

    return createdAppointment;
};

module.exports = postAppointmentCtrl;