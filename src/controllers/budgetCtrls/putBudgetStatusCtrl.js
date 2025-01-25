require('../../db.js');
const Budget = require('../../collections/Budget.js');

const putBudgetStatusCtrl = async (_id) => {

    const budget = await Budget.findById(_id);
    const newStatus = !budget.active;

    const updatedStatus = await Budget.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putBudgetStatusCtrl;