const { Schema, model } = require('mongoose');

const vehicleSchema = new Schema ({
    licensePlate: {
        type: String,
        unique: true,
        required: true,
        message: 'Invalid License Plate Number'
    },

    brand: {
        type: String,
        required: true,
        message: 'Invalid Brand'
    },

    model: {
        type: String,
        required: true,
        message: 'Invalid Model'
    },

    year: {
        type: Number,
        required: true,
        message: 'Invalid Year'
    },

    engine: {
        type: String,
        required: true,
        message: 'Invalid Engine'
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

module.exports = model('Vehicle', vehicleSchema);