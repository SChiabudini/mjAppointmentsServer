require('../../db.js');
const Appointment = require('../../collections/Appointment.js');

const putAppointmentStatusCtrl = async (_id) => {

    const appointment = await Appointment.findById(_id);
    const newStatus = !appointment.active;

    const updatedStatus = await Appointment.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putAppointmentStatusCtrl;