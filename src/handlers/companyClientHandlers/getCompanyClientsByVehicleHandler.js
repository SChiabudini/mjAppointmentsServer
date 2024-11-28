const getCompanyClientsByVehicleCtrl = require('../../controllers/companyClientCtrls/getCompanyClientsByVehicleCtrl.js');

const getCompanyClientsByVehicleHandler = async (req, res) => {
    const { vehicle } = req.query;

    try {
        
        const companyClientsByVehicle = await getCompanyClientsByVehicleCtrl(vehicle);

        if(!companyClientsByVehicle){
            return res.status(404).send(`No client found with vehicle: "${vehicle}"`);
        }

        res.status(200).send(companyClientsByVehicle);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCompanyClientsByVehicleHandler;