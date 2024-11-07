const { Schema, model } = require('mongoose');

const companyClientSchema = new Schema ({
    cuit: {
        type: String,
        unique: true,
        required: true,
        message: 'Invalid Cuit'
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

    address: {
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
    ],

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('CompanyClient', companyClientSchema);