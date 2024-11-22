const getActiveVehiclesByClientCtrl = require('../../controllers/vehicleCtrls/getActiveVehiclesByClientCtrl.js');

const getActiveVehiclesByClientHandler = async (req, res) => {
    const { client } = req.query;  

    try {
        const activeVehiclesByClient = await getActiveVehiclesByClientCtrl(client);

        if (!activeVehiclesByClient) {
            return res.status(404).send(`No vehicle found with client: "${licensePlate}"`);
        }

        res.status(200).send(activeVehiclesByClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveVehiclesByClientHandler;