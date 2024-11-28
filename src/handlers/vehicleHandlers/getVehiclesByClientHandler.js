const getVehiclesByClientCtrl = require('../../controllers/vehicleCtrls/getVehiclesByClientCtrl.js');

const getVehiclesByClientHandler = async (req, res) => {
    const { client } = req.query;  

    try {
        const vehiclesByClient = await getVehiclesByClientCtrl(client);

        if (!vehiclesByClient) {
            return res.status(404).send(`No vehicle found with client: "${licensePlate}"`);
        }

        res.status(200).send(vehiclesByClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getVehiclesByClientHandler;