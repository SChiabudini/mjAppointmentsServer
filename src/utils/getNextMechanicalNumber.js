const MechanicalCounter = require('./mechanicalCounter.js');

async function getNextMechanicalNumber() {
    const mechanicalCounter = await MechanicalCounter.findOneAndUpdate(
        { name: 'number' },
        { $inc: { value: 1 } },
        { new: true, upsert: true }
    );
    return mechanicalCounter.value.toString().padStart(7, '0');
}

module.exports = getNextMechanicalNumber;