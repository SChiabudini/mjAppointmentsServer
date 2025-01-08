const getActiveBudgetsByClientCtrl = require('../../controllers/budgetCtrls/getActiveBudgetsByClientCtrl.js');

const getActiveBudgetsByClientHandler = async (req, res) => {
    const { client } = req.query;  

    try {
        const activeBudgetsByClient = await getActiveBudgetsByClientCtrl(client);

        if (!activeBudgetsByClient) {
            return res.status(404).send(`No budget found with client: "${client}"`);
        }

        res.status(200).send(activeBudgetsByClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveBudgetsByClientHandler;