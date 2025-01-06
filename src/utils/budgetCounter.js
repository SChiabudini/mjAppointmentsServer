const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const budgetCounterSchema = new Schema ({
    name: { type: String, requird: true, unique: true },
    value: { type: Number, default: 0 }
});

const BudgetCounter = model('BudgetCounter', budgetCounterSchema);

module.exports = BudgetCounter;