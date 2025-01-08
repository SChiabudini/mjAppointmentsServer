const getActiveBudgetsByVehicleCtrl = require('../../controllers/budgetCtrls/getActiveBudgetsByVehicleCtrl.js');

const getActiveBudgetsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;  

    try {
        const activeBudgetsByVehicle = await getActiveBudgetsByVehicleCtrl(vehicle);

        if (!activeBudgetsByVehicle) {
            return res.status(404).send(`No budget found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(activeBudgetsByVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveBudgetsByVehicleHandler;