const Budget = require('../../collections/Budget.js');

const postBudgetCtrl = async ( end, personClient, companyClient, vehicle, items ) => {    

    const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const newBudget = {
        end,
        personClient,
        companyClient,
        vehicle,
        items,
        total
    };

    const createdBudget = await Budget.create(newBudget);

    return createdBudget;
};

module.exports = postBudgetCtrl;