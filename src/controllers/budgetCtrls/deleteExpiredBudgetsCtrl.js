require('../../db.js');
const Budgets = require('../../collections/Budget.js');

const deleteExpiredBudgetsCtrl = async (date) => {

    if(!date){
        throw new Error('A valid date must be provided');
    }

    const limitDate = new Date(date);
    limitDate.setFullYear(limitDate.getFullYear() - 1);

    const result = await Budgets.deleteMany({ end: { $lt: limitDate } });

    return result.deletedCount;
};

module.exports = deleteExpiredBudgetsCtrl;