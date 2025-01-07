const getActiveBudgetsCtrl = require('../../controllers/budgetCtrls/getActiveBudgetsCtrl.js');

const getActiveBudgetsHandler = async (req, res) => {

    try {
        const activeBudgets = await getActiveBudgetsCtrl();

        res.status(200).send(activeBudgets);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getActiveBudgetsHandler;