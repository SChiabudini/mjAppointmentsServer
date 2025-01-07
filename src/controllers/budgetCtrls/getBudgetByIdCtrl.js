require('../../db.js');
const Budget = require('../../collections/Budget.js');

const getBudgetByIdCtrl = async (_id) => {

    if(_id) {
        const budgetById = await Budget.findOne({ _id })
        .populate('personClient')
        .populate('companyClient')
        .populate('vehicle');

        return budgetById;
    };

};

module.exports = getBudgetByIdCtrl;