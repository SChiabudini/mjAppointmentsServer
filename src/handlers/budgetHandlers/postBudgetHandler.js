const postBudgetCtrl = require('../../controllers/budgetCtrls/postBudgetCtrl.js');

const postBudgetHandler = async (req, res) => {

    const { personClient, companyClient, vehicle, items } = req.body;
    
    try {

        if (!items) {
            return res.status(400).send({ error: 'Missing data' });
        };

        if (!personClient && !companyClient) {
            return res.status(400).send({ error: 'Either personClient or companyClient must be provided' });
        };
        if (personClient && companyClient) {
            return res.status(400).send({ error: 'Cannot have both personClient and companyClient' });
        };

        if (personClient && typeof personClient !== 'string') {
            return res.status(400).send({ error: 'Invalid personClient data' });
        };
        if (companyClient && typeof companyClient !== 'string') {
            return res.status(400).send({ error: 'Invalid companyClient data' });
        };

        if (vehicle && typeof vehicle !== 'string') {
            return res.status(400).send({ error: 'Invalid vehicle data' });
        };

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

        const newBudget = await postBudgetCtrl(personClient, companyClient, vehicle, items);
        res.status(200).send(newBudget);

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = postBudgetHandler;