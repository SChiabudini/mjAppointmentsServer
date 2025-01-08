const getBudgetsByClientCtrl = require('../../controllers/budgetCtrls/getBudgetsByClientCtrl.js');

const getBudgetsByClientHandler = async (req, res) => {
    const { client } = req.query;  

    try {
        const budgetsByClient = await getBudgetsByClientCtrl(client);

        if (!budgetsByClient) {
            return res.status(404).send(`No budget found with client: "${client}"`);
        }

        res.status(200).send(budgetsByClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getBudgetsByClientHandler;