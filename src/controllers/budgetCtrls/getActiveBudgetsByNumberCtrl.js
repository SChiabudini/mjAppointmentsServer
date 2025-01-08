require('../../db.js');
const Budget = require('../../collections/Budget.js');

const getActiveBudgetsByNumberCtrl = async (number) => {

  const regex = new RegExp(`.*${number}.*`, 'i');

  if (number) {
    const activeBudgets = await Budget.find({ number: regex, active: true })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return activeBudgets;
  };
};

module.exports = getActiveBudgetsByNumberCtrl;