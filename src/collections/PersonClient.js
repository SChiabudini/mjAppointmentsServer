const { Schema, model } = require('mongoose');

const personClientSchema = new Schema ({
    dni: {
        type: String,
        unique: true,
        required: true,
        message: 'Invalid DNI'
    },

    name: {
        type: String,
        required: true,
        message: 'Invalid Name'
    },

    email: {
        type: String,
        required: true,
        message: 'Invalid Email'
    },

    phones: [
        {
            type: String,
            required: true,
            message: 'Invalid Phone'
        }
    ],

    cuilCuit: {
        type: String
    },

    vehicles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Vehicle'
        }
    ],

    serviceSheets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ServiceSheet'
        }
    ],

    procedureSheets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ProcedureSheet'
        }
    ]
});

module.exports = model('PersonClient', personClientSchema);