const getActiveBudgetsByNumberCtrl = require('../../controllers/budgetCtrls/getActiveBudgetsByNumberCtrl.js');

const getActiveBudgetsByNumberHandler = async (req, res) => {
    const { number } = req.query;  

    try {
        const activeBudgetsByNumber = await getActiveBudgetsByNumberCtrl(number);

        if (!activeBudgetsByNumber) {
            return res.status(404).send(`No budget found with number: "${number}"`);
        }

        res.status(200).send(activeBudgetsByNumber);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveBudgetsByNumberHandler;