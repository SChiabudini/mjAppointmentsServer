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

companyClientSchema.pre('save', function (next) {
    if (this.name) {
        this.normalizedName = this.name.normalize('NFD').replace(/[̀-ͯ]/g, '');
    }
    next();
});

module.exports = model('CompanyClient', companyClientSchema);