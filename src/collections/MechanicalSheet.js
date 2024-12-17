const { Schema, model } = require('mongoose');
const getNextMechanicalNumber = require('../utils/getNextMechanicalNumber.js');

const mechanicalSheetSchema = new Schema ({
    number: {
        type: String,
        unique: true
    },

    date: {
        type: Date,
        default: null
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
        ref: 'Vehicle'
    },

    kilometers: {
        type: Number,
        required: true,
        message: 'Invalid Kilometers'
    },

    keyWords: {
        type: String,
        required: true,
        message: 'Invalid Kewords'
    },

    description: {
        type: String,
        required: true,
        message: 'Invalid Description'
    },

    amount: {
        type: Number,
        required: true,
        message: 'Invalid Amount'
    },

    active: {
        type: Boolean,
        default: true
    }
});

// Middleware para ajustar la fecha antes de guardar

mechanicalSheetSchema.pre('save', function(next) {
    if (!this.date) {
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000;
        this.date = new Date(now.getTime() - offset);
    }
    next();
});

// Middleware para generar un número único antes de guardar

mechanicalSheetSchema.pre('save', async function(next) {
    if (!this.number) {
        try {
            this.number = await getNextMechanicalNumber();
            if (!this.number) {
                throw new Error('Failed to generate number');
            }
        } catch (error) {
            return next(error);
        }
    }
    next();
});

module.exports = model('MechanicalSheet', mechanicalSheetSchema);