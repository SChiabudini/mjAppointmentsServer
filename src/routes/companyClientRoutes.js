const companyClientRouter = require('express').Router();
const { getCompanyClientsHandler, getActiveCompanyClientsHandler, getCompanyClientsByCuitHandler, getActiveCompanyClientsByCuitHandler, postCompanyClientHandler } = require('../handlers/companyClientHandlers/indexHandlers.js');

companyClientRouter.get('/all', (req, res, next) => {
    const { cuit } = req.query;

    if (cuit) {
        return getCompanyClientsByCuitHandler(req, res, next);
    };

    return getCompanyClientsHandler(req, res, next);
});

companyClientRouter.get('/', (req, res, next) => {
    const { cuit } = req.query;

    if (cuit) {
        return getActiveCompanyClientsByCuitHandler(req, res, next);
    };

    return getActiveCompanyClientsHandler(req, res, next);
});

companyClientRouter.post('/', postCompanyClientHandler);

module.exports = companyClientRouter;