require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');
const Vehicle = require('../../collections/Vehicle.js');

const getCompanyClientsByVehiclesCtrl = async (_id) => {

    try {

        const companyClient = await CompanyClient.findOne({ _id });

        if (!companyClient) {
            throw new Error('Cliente (empresa) no encontrado');
        }

        if (companyClient.vehicles && companyClient.vehicles.length > 0) {
            const vehicles = await Vehicle.find({ '_id': { $in: companyClient.vehicles } });

            return vehicles; 
        }

        // Si no tiene vehículos asociados, devolvemos un array vacío
        return [];
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
}

module.exports = getCompanyClientsByVehiclesCtrl;
