const getActiveMechanicalSheetsByVehicleCtrl = require('../../controllers/mechanicalSheetCtrls/getActiveMechanicalSheetsByVehicleCtrl.js');

const getActiveMechanicalSheetsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;  

    try {
        const activeMechanicalSheetsByVehicle = await getActiveMechanicalSheetsByVehicleCtrl(vehicle);

        if (!activeMechanicalSheetsByVehicle) {
            return res.status(404).send(`No mechanical sheet found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(activeMechanicalSheetsByVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveMechanicalSheetsByVehicleHandler;