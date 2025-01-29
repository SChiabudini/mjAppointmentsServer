const { Schema, model } = require('mongoose');
const getNextBudgetNumber = require('../utils/getNextBudgetNumber.js');

const budgetSchema = new Schema ({
    number: {
        type: String,
        unique: true
    },

    start: {  
        type: Date,
        message: 'Invalid Start Date and Time',
    },

    end: { 
        type: Date,
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
        ref: 'Vehicle'
    },

    items: [
        {
            quantity: {
                type: Number,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],

    total: {
        type: Number,
        required: true
    },

    active: {
        type: Boolean,
        default: true
    }
});

// Middleware para ajustar la fecha antes de guardar

budgetSchema.pre('save', function(next) {
    if (!this.start) {
        this.start = new Date();
    }

    if (!this.end) {
        this.end = new Date(this.start);
        this.end.setDate(this.end.getDate() + 7);
    }
    next();
});

// Middleware para generar un número único antes de guardar

budgetSchema.pre('save', async function(next) {
    if (!this.number) {
        try {
            this.number = await getNextBudgetNumber();
            if (!this.number) {
                throw new Error('Failed to generate number');
            }
        } catch (error) {
            return next(error);
        }
    }
    next();
});

module.exports = model('Budget', budgetSchema);