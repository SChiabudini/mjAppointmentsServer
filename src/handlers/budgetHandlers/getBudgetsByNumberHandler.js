const getBudgetsByNumberCtrl = require('../../controllers/budgetCtrls/getBudgetsByNumberCtrl.js');

const getBudgetsByNumberHandler = async (req, res) => {
    const { number } = req.query;  

    try {
        const budgetsByNumber = await getBudgetsByNumberCtrl(number);

        if (!budgetsByNumber) {
            return res.status(404).send(`No budget found with number: "${number}"`);
        }

        res.status(200).send(budgetsByNumber);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getBudgetsByNumberHandler;