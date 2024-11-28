const getActivePersonClientsByVehicleCtrl = require('../../controllers/personClientCtrls/getActivePersonClientsByVehicleCtrl.js');

const getActivePersonClientsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;

    try {
        
        const activePersonClientsByVehicle = await getActivePersonClientsByVehicleCtrl(vehicle);

        if(!activePersonClientsByVehicle){
            return res.status(404).send(`No client found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(activePersonClientsByVehicle);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActivePersonClientsByVehicleHandler;