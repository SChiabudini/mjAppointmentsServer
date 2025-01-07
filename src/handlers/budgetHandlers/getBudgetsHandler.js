const getBudgetsCtrl = require('../../controllers/budgetCtrls/getBudgetsCtrl.js');

const getBudgetsHandler = async (req, res) => {

    try {
        const budgets = await getBudgetsCtrl();

        res.status(200).send(budgets);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getBudgetsHandler;