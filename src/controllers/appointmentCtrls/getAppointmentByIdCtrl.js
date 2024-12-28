require('../../db.js');
const Appointment = require('../../collections/Appointment.js');

const getAppointmentByIdCtrl = async (_id) => {

    if(_id) {
        const appointmentById = await Appointment.findOne({ _id })
        .populate({
            path: 'personClient',  
            select: 'dni name email phones cuilCuit'
        })
        .populate({
            path: 'companyClient',  
            select: 'cuit name email phones address'
        })
        .populate({
            path: 'vehicle',  
            select: 'brand engine licensePlate model year'
        });

        return appointmentById;
    };

};

module.exports = getAppointmentByIdCtrl;