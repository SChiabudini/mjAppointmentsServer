require('../../db.js');
const Appointment = require('../../collections/Appointment.js');

const getActiveAppointmentsCtrl = async () => {
    const activeAppointments = await Appointment.find({ active: true })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return activeAppointments;
};

module.exports = getActiveAppointmentsCtrl;