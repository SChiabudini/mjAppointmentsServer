const BudgetCounter = require('./budgetCounter.js');

async function getNextBudgetNumber() {
    const budgetCounter = await BudgetCounter.findOneAndUpdate(
        { name:  'number'},
        { $inc: { value: 1 } },
        { new: true, upsert: true }
    );

    return budgetCounter.value.toString().padStart(7, '0');
};

module.exports = getNextBudgetNumber;