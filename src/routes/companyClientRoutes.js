const companyClientRouter = require('express').Router();
const { getCompanyClientsHandler, getCompanyClientByIdHandler, getActiveCompanyClientsHandler, getCompanyClientsByCuitHandler, getActiveCompanyClientsByCuitHandler, getCompanyClientsByNameHandler, getActiveCompanyClientsByNameHandler, getActiveCompanyClientsByVehicleHandler, getCompanyClientsByVehicleHandler, postCompanyClientHandler, putCompanyClientHandler } = require('../handlers/companyClientHandlers/indexHandlers.js');

companyClientRouter.get('/all', (req, res, next) => {
    const { cuit, name, vehicle } = req.query;

    if (cuit) {
        return getCompanyClientsByCuitHandler(req, res, next);
    };

    if (name) {
        return getCompanyClientsByNameHandler(req, res, next);
    };
    
    if (vehicle) {
        return getCompanyClientsByVehicleHandler(req, res, next);
    }

    return getCompanyClientsHandler(req, res, next);
});

companyClientRouter.get('/', (req, res, next) => {
    const { cuit, name, vehicle } = req.query;

    if (cuit) {
        return getActiveCompanyClientsByCuitHandler(req, res, next);
    };

    if (name) {
        return getActiveCompanyClientsByNameHandler(req, res, next);
    };

    if (vehicle) {
        return getActiveCompanyClientsByVehicleHandler(req, res, next);
    }

    return getActiveCompanyClientsHandler(req, res, next);
});

companyClientRouter.get('/:id', getCompanyClientByIdHandler);

companyClientRouter.post('/', postCompanyClientHandler);

companyClientRouter.put('/', putCompanyClientHandler);

module.exports = companyClientRouter;