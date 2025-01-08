require('../../db.js');
const Budget = require('../../collections/Budget.js');

const getActiveBudgetsByClientCtrl = async (client) => {

  const normalizeString = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(normalizeString(client), 'i');

  const budgets = await Budget.find({ active: true })
    .populate('personClient', 'name')
    .populate('companyClient', 'name');

  return budgets.filter(
    (budget) =>
      (budget.personClient && regex.test(normalizeString(budget.personClient.name))) ||
      (budget.companyClient && regex.test(normalizeString(budget.companyClient.name)))
  );
};

module.exports = getActiveBudgetsByClientCtrl; 