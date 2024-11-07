const ServiceCounter = require('./serviceCounter.js');

async function getNextServiceNumber() {
    const serviceCounter = await ServiceCounter.findOneAndUpdate(
        { name: 'number' },
        { $inc: { value: 1 } },
        { new: true, upsert: true }
    );
    return serviceCounter.value.toString().padStart(7, '0');
}

module.exports = getNextServiceNumber;