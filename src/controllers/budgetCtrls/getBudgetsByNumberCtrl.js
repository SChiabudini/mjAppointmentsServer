require('../../db.js');
const Budget = require('../../collections/Budget.js');

const getBudgetsByNumberCtrl = async (number) => {

  const regex = new RegExp(`.*${number}.*`, 'i');

  if (number) {
    const budgets = await Budget.find({ number: regex })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return budgets;
  };
};

module.exports = getBudgetsByNumberCtrl;