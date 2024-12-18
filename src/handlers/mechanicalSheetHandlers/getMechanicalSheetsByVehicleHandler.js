const getMechanicalSheetsByVehicleCtrl = require('../../controllers/mechanicalSheetCtrls/getMechanicalSheetsByVehicleCtrl.js');

const getMechanicalSheetsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;  

    try {
        const mechanicalSheetsByVehicle = await getMechanicalSheetsByVehicleCtrl(vehicle);

        if (!mechanicalSheetsByVehicle) {
            return res.status(404).send(`No mechanical sheet found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(mechanicalSheetsByVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getMechanicalSheetsByVehicleHandler;