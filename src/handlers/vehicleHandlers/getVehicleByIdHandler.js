const getVehicleByIdCtrl = require('../../controllers/vehicleCtrls/getVehicleByIdCtrl.js');

const getVehicleByIdHandler = async (req, res) => {

    const { id } = req.params;

    try {
        
        const vehicleById = await getVehicleByIdCtrl(id);

        if(!vehicleById){
            return res.status(404).send(`No vehicle found with ID: "${id}"`);
        }

        res.status(200).send(vehicleById);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

module.exports = getVehicleByIdHandler;