const getPersonClientsByVehiclesCtrl = require('../../controllers/personClientCtrls/getPersonClientsByVehiclesCtrl');

const getPersonClientsByVehiclesHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const personClientsVehicles = await getPersonClientsByVehiclesCtrl(id);

        res.status(200).send(personClientsVehicles);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getPersonClientsByVehiclesHandler;