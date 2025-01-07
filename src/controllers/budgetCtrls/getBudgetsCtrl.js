require('../../db.js');
const Budget = require('../../collections/Budget.js');

const getBudgetsCtrl = async () => {
    const budgets = await Budget.find()
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return budgets;
};

module.exports = getBudgetsCtrl;