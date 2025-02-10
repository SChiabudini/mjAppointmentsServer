require('../../db.js');
const Appointment = require('../../collections/Appointment.js');

const deleteExpiredAppointmentsCtrl = async (date) => {

    if(!date){
        throw new Error('A valid date must be provided');
    }

    const limitDate = new Date(date);
    limitDate.setMonth(limitDate.getMonth() - 1);

    const result = await Appointment.deleteMany({ end: { $lt: limitDate } });

    return result.deletedCount;
};

module.exports = deleteExpiredAppointmentsCtrl;