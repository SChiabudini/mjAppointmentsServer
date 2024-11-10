const getActiveVehiclesCtrl = require('../../controllers/vehicleCtrls/getActiveVehiclesCtrl.js');

const getActiveVehiclesHandler = async (req, res) => {

    try {
        const activeVehicles = await getActiveVehiclesCtrl();

        res.status(200).send(activeVehicles);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getActiveVehiclesHandler;