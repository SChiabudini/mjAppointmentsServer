const getActiveServiceSheetsByVehicleCtrl = require('../../controllers/serviceSheetCtrls/getActiveServiceSheetsByVehicleCtrl.js');

const getActiveServiceSheetsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;  

    try {
        const activeServiceSheetsByVehicle = await getActiveServiceSheetsByVehicleCtrl(vehicle);

        if (!activeServiceSheetsByVehicle) {
            return res.status(404).send(`No service sheet found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(activeServiceSheetsByVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveServiceSheetsByVehicleHandler;