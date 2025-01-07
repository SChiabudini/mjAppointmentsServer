require('../../db.js');
const Budget = require('../../collections/Budget.js');

const getActiveBudgetsCtrl = async () => {
    const activeBudgets = await Budget.find({ active: true })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return activeBudgets;
};

module.exports = getActiveBudgetsCtrl;