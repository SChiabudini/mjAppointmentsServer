const ProcedureCounter = require('./procedureCounter.js');

async function getNextProcedureNumber() {
    const procedureCounter = await ProcedureCounter.findOneAndUpdate(
        { name: 'number' },
        { $inc: { value: 1 } },
        { new: true, upsert: true }
    );
    return procedureCounter.value.toString().padStart(7, '0');
}

module.exports = getNextProcedureNumber;