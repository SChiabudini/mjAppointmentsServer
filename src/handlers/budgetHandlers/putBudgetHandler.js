const putBudgetCtrl = require('../../controllers/budgetCtrls/putBudgetCtrl.js');

const putBudgetHandler = async (req, res) => {

    const { _id, personClient, companyClient, vehicle, items } = req.body;
    
    try {

        if(personClient !== null && typeof personClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - personClient' });
        }

        if(companyClient !== null && typeof companyClient !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - companyClient' });
        }

        if(typeof vehicle !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - vehicle' });
        }

        if (!Array.isArray(items)) {
            return res.status(400).send({ error: 'Items must be an array' });
        };

        for (const item of items) {
            if (
                typeof item.quantity !== 'number' || 
                typeof item.description !== 'string' || 
                typeof item.price !== 'number'
            ) {
                return res.status(400).send({
                    error: 'Each item must have quantity (number), description (string), and price (number)',
                });
            };
        }

        const editedBudget = await putBudgetCtrl(_id, personClient, companyClient, vehicle, items);

        res.status(200).send(editedBudget);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putBudgetHandler;