const getCompanyClientsByVehiclesCtrl = require('../../controllers/companyClientCtrls/getCompanyClientsByVehiclesCtrl');

const getCompanyClientsByVehiclesHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const companyClientsVehicles = await getCompanyClientsByVehiclesCtrl(id);

        res.status(200).send(companyClientsVehicles);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getCompanyClientsByVehiclesHandler;