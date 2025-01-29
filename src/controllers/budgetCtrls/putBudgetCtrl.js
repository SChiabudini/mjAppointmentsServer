require('../../db.js');
const Budget = require('../../collections/Budget.js');

const putBudgetCtrl = async (_id, personClient, companyClient, vehicle, items ) => {

    const update = {};

    if (personClient !== null && personClient !== false) {
        update.personClient = personClient;
    };

    if (companyClient !== null && companyClient !== false) {
        update.companyClient = companyClient;
    };

    if (vehicle !== null && vehicle !== false) {
        update.vehicle = vehicle;
    };

    if (items !== null && items !== false) {
        update.items = items;
    };

    update.total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const updatedBudget = await Budget.findOneAndUpdate(
        { _id },
        update,
        { new: true }
    );

    return updatedBudget;
};

module.exports = putBudgetCtrl;