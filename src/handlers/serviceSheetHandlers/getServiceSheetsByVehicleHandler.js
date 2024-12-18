const getServiceSheetsByVehicleCtrl = require('../../controllers/serviceSheetCtrls/getServiceSheetsByVehicleCtrl.js');

const getServiceSheetsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;  

    try {
        const serviceSheetsByVehicle = await getServiceSheetsByVehicleCtrl(vehicle);

        if (!serviceSheetsByVehicle) {
            return res.status(404).send(`No service sheet found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(serviceSheetsByVehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getServiceSheetsByVehicleHandler;