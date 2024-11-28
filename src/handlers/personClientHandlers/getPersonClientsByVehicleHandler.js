const getPersonClientsByVehicleCtrl = require('../../controllers/personClientCtrls/getPersonClientsByVehicleCtrl.js');

const getPersonClientsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;

    try {
        
        const personClientsByVehicle = await getPersonClientsByVehicleCtrl(vehicle);

        if(!personClientsByVehicle){
            return res.status(404).send(`No client found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(personClientsByVehicle);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getPersonClientsByVehicleHandler;