const getBudgetsByVehicleCtrl = require('../../controllers/budgetCtrls/getBudgetsByVehicleCtrl.js');

const getBudgetsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;  

    try {
        const budgetsByVehicle = await getBudgetsByVehicleCtrl(vehicle);

        if (!budgetsByVehicle) {
            return res.status(404).send(`No budget found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(budgetsByVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getBudgetsByVehicleHandler;