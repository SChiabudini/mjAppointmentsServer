const getActiveVehiclesByLicensePlateCtrl = require('../../controllers/vehicleCtrls/getActiveVehiclesByLicensePlateCtrl.js');

const getActiveVehiclesByLicensePlateHandler = async (req, res) => {
    const { licensePlate } = req.query;  

    try {
        const activeVehiclesByLicensePlate = await getActiveVehiclesByLicensePlateCtrl(licensePlate);

        if (!activeVehiclesByLicensePlate) {
            return res.status(404).send(`No vehicle found with license plate: "${licensePlate}"`);
        }

        res.status(200).send(activeVehiclesByLicensePlate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveVehiclesByLicensePlateHandler;