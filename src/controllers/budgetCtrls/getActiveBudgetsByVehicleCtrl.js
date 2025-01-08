require('../../db.js');
const Budget = require('../../collections/Budget.js');

const getActiveBudgetsByVehicleCtrl = async (licensePlate) => {
    const normalizeString = (str) => 
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const regex = new RegExp(normalizeString(licensePlate), 'i');

    const budgets = await Budget.find({ active: true })
    .populate('vehicle', 'licensePlate');

    return budgets.filter(budget => 
        budget.vehicle && regex.test(normalizeString(budget.vehicle.licensePlate))
    );
};

module.exports = getActiveBudgetsByVehicleCtrl;