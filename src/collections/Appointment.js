const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema ({

    start: {  
        type: Date,
        required: true,
        message: 'Invalid Start Date and Time'
    },

    end: { 
        type: Date,
        required: true,
        message: 'Invalid End Date and Time'
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
        type: Object,
        required: true,
        message: 'Invalid Procedure'
    },

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Appointment', appointmentSchema);