const getVehiclesCtrl = require('../../controllers/vehicleCtrls/getVehiclesCtrl.js');

const getVehiclesHandler = async (req, res) => {

    try {
        const vehicles = await getVehiclesCtrl();

        res.status(200).send(vehicles);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getVehiclesHandler;