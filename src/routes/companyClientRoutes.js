const companyClientRouter = require('express').Router();
const { getCompanyClientsHandler, getCompanyClientByIdHandler, getActiveCompanyClientsHandler, getCompanyClientsByCuitHandler, getActiveCompanyClientsByCuitHandler, getCompanyClientsByNameHandler, getActiveCompanyClientsByNameHandler, getCompanyClientsByVehiclesHandler, postCompanyClientHandler } = require('../handlers/companyClientHandlers/indexHandlers.js');

companyClientRouter.get('/all', (req, res, next) => {
    const { cuit, name } = req.query;

    if (cuit) {
        return getCompanyClientsByCuitHandler(req, res, next);
    };

    if (name) {
        return getCompanyClientsByNameHandler(req, res, next);
    };

    return getCompanyClientsHandler(req, res, next);
});

companyClientRouter.get('/', (req, res, next) => {
    const { cuit, name } = req.query;

    if (cuit) {
        return getActiveCompanyClientsByCuitHandler(req, res, next);
    };

    if (name) {
        return getActiveCompanyClientsByNameHandler(req, res, next);
    };

    return getActiveCompanyClientsHandler(req, res, next);
});

companyClientRouter.get('/:id', getCompanyClientByIdHandler);

companyClientRouter.get('/vehicles/:id', getCompanyClientsByVehiclesHandler);

companyClientRouter.post('/', postCompanyClientHandler);

module.exports = companyClientRouter;