const putVehicleStatusCtrl = require('../../controllers/vehicleCtrls/putVehicleStatusCtrl.js');

const putVehicleStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const vehicleUpdate = await putVehicleStatusCtrl(id)
    
      return res.status(200).send(`The vehicle changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putVehicleStatusHandler;