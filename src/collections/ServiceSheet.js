const { Schema, model } = require('mongoose');
const getNextServiceNumber = require('../utils/getNextServiceNumber.js');

const filtersENUM = [ 'Aceite', 'Aire', 'Habitáculo', 'Combustible' ];

const serviceSheetSchema = new Schema ({
    number: {
        type: String,
        unique: true
    },

    date: {
        type: Date,
        required: true,
        message: 'Invalid date'
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

    kilometers: {
        type: Number,
        required: true,
        message: 'Invalid Kilometers'
    },

    kmsToNextService: {
        type: Number,
        required: true,
        message: 'Invalid Kilometers to next service'
    },

    oil: {
        type: String,
        required: true,
        message: 'Invalid Oil type'
    },

    filters: [
        {
            type: String,
            enum: filtersENUM,
            required: true,
            message: 'Invalid Filter'
        }
    ],

    notes: {
        type: String
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

// Middleware para generar un número único antes de guardar

serviceSheetSchema.pre('save', async function(next) {
    if (!this.number) {
        try {
            this.number = await getNextServiceNumber();
            if (!this.number) {
                throw new Error('Failed to generate number');
            }
        } catch (error) {
            return next(error);
        }
    }
    next();
});

module.exports = model('ServiceSheet', serviceSheetSchema);