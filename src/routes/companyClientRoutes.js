const companyClientRouter = require('express').Router();
const { getCompanyClientsHandler, getCompanyClientsByCuitHandler, postCompanyClientHandler } = require('../handlers/companyClientHandlers/indexHandlers.js');

companyClientRouter.get('/', (req, res, next) => {
    const { cuit } = req.query;

    if (cuit) {
        return getCompanyClientsByCuitHandler(req, res, next);
    };

    return getCompanyClientsHandler(req, res, next);
});

companyClientRouter.post('/', postCompanyClientHandler);

module.exports = companyClientRouter;