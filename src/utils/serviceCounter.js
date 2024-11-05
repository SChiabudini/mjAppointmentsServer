const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const serviceCounterSchema = new Schema({
    name: { type: String, required: true, unique: true },
    value: { type: Number, default: 0 }
});

const ServiceCounter = model('ServiceCounter', serviceCounterSchema);

module.exports = ServiceCounter;