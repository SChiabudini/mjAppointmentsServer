const { Schema, model } = require('mongoose');
const getNextBudgetNumber = require('../utils/getNextBudgetNumber.js');

const budgetSchema = new Schema ({
    number: {
        type: String,
        unique: true
    },

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
    }
});

// Middleware para ajustar la fecha antes de guardar

budgetSchema.pre('save', function(next) {
    if (!this.start) {
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000;
        this.start = new Date(now.getTime() - offset);
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