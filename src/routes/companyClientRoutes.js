const companyClientRouter = require('express').Router();
const { getCompanyClientsHandler, getActiveCompanyClientsHandler, getCompanyClientsByCuitHandler, postCompanyClientHandler } = require('../handlers/companyClientHandlers/indexHandlers.js');

companyClientRouter.get('/all', getCompanyClientsHandler);

companyClientRouter.get('/', (req, res, next) => {
    const { cuit } = req.query;

    if (cuit) {
        return getCompanyClientsByCuitHandler(req, res, next);
    };

    return getActiveCompanyClientsHandler(req, res, next);
});

companyClientRouter.post('/', postCompanyClientHandler);

module.exports = companyClientRouter;