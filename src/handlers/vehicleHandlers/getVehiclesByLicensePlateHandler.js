const getVehiclesByLicensePlateCtrl = require('../../controllers/vehicleCtrls/getVehiclesByLicensePlateCtrl.js');

const getVehiclesByLicensePlateHandler = async (req, res) => {
    const { licensePlate } = req.query;  

    try {
        const vehiclesByLicensePlate = await getVehiclesByLicensePlateCtrl(licensePlate);

        if (!vehiclesByLicensePlate) {
            return res.status(404).send(`No vehicle found with license plate: "${licensePlate}"`);
        }

        res.status(200).send(vehiclesByLicensePlate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getVehiclesByLicensePlateHandler;