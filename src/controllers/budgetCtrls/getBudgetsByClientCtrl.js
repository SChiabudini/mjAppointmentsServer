require('../../db.js');
const Budget = require('../../collections/Budget.js');

const getBudgetsByClientCtrl = async (client) => {

  const normalizeString = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(normalizeString(client), 'i');

  const budgets = await Budget.find()
    .populate('personClient', 'name normalizedName')
    .populate('companyClient', 'name normalizedName');

    return budgets.filter((budget) => {
      const personClient = budget.personClient;
      const companyClient = budget.companyClient;
  
      return (
        (personClient &&
          (regex.test(normalizeString(personClient.name)) ||
            (personClient.normalizedName && regex.test(personClient.normalizedName)))) ||
        (companyClient &&
          (regex.test(normalizeString(companyClient.name)) ||
            (companyClient.normalizedName && regex.test(companyClient.normalizedName))))
      );
    });
};

module.exports = getBudgetsByClientCtrl; 