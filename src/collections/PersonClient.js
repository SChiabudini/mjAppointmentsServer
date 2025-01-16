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
            // required: true,
            message: 'Invalid Phone'
        }
    ],

    phoneWhatsapp: {
        type: Number,
        // required: true,
        message: 'Invalid phone whatsapp'
    },

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

    mechanicalSheets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'MechanicalSheet'
        }
    ],

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('PersonClient', personClientSchema);