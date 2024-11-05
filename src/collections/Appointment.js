const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema ({

    date: {
        type: String,
        required: true,
        message: 'Invalid Date'
    },
    time: {
        type: String,
        required: true,
        message: 'Invalid Time'
    },

    personClient: {
        type: Schema.Types.ObjectId,
        ref: 'PersonClient',
        default: null
    },

    companyClient: {
        type: Schema.Types.ObjectId,
        ref: 'CompanyClient',
        default: null
    },

    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },

    procedure: {
        type: String,
        required: true,
        message: 'Invalid Procedure'
    }
});

module.exports = model('Appointment', appointmentSchema);