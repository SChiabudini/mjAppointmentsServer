const getBudgetByIdCtrl = require('../../controllers/budgetCtrls/getBudgetByIdCtrl.js');

const getBudgetByIdHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const budgetById = await getBudgetByIdCtrl(id);

        if(!budgetById){
            return res.status(404).send(`No budget found with ID: "${id}"`);
        };

        res.status(200).send(budgetById);

    } catch (error) {
        res.status(500).json({ error: error.message });
    };

};

module.exports = getBudgetByIdHandler;