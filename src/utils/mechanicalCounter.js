const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const mechanicalCounterSchema = new Schema({
    name: { type: String, required: true, unique: true },
    value: { type: Number, default: 0 }
});

const MechanicalCounter = model('MechanicalCounter', mechanicalCounterSchema);

module.exports = MechanicalCounter;