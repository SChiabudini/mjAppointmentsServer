const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const procedureCounterSchema = new Schema({
    name: { type: String, required: true, unique: true },
    value: { type: Number, default: 0 }
});

const ProcedureCounter = model('ProcedureCounter', procedureCounterSchema);

module.exports = ProcedureCounter;