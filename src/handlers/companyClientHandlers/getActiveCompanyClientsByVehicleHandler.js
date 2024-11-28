const getActiveCompanyClientsByVehicleCtrl = require('../../controllers/companyClientCtrls/getActiveCompanyClientsByVehicleCtrl.js');

const getActiveCompanyClientsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;

    try {
        
        const activeCompanyClientsByVehicle = await getActiveCompanyClientsByVehicleCtrl(vehicle);

        if(!activeCompanyClientsByVehicle){
            return res.status(404).send(`No client found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(activeCompanyClientsByVehicle);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveCompanyClientsByVehicleHandler;