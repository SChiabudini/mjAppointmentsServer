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

    normalizedName: {
        type: String
    },

    email: {
        type: String,
        required: true,
        message: 'Invalid Email'
    },

    phoneWsp: {
        type: Object,
        message: 'Invalid phone whatsapp'
    },

    phones: [
        {
            type: String,
            // required: true,
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

personClientSchema.pre('save', function (next) {
    if (this.name) {
        this.normalizedName = this.name.normalize('NFD').replace(/[̀-ͯ]/g, '');
    }
    next();
});

module.exports = model('PersonClient', personClientSchema);