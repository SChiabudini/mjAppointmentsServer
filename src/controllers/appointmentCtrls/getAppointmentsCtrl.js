require('../../db.js');
const Appointment = require('../../collections/Appointment.js');

const getAppointmentsCtrl = async () => {
    const appointments = await Appointment.find().populate('personClient').populate('companyClient').populate('vehicle');

    return appointments;
};

module.exports = getAppointmentsCtrl;