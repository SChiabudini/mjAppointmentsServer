const personClientRouter = require('express').Router();
const { getPersonClientsHandler, getActivePersonClientsHandler, getPersonClientsByDniHandler, getActivePersonClientsByDniHandler, postPersonClientHandler } = require('../handlers/personClientHandlers/indexHandlers.js');

personClientRouter.get('/all', (req, res, next) => {
    const { dni } = req.query;

    if (dni) {
        return getPersonClientsByDniHandler(req, res, next);
    };

    return getPersonClientsHandler(req, res, next);
});

personClientRouter.get('/', (req, res, next) => {
    const { dni } = req.query;

    if (dni) {
        return getActivePersonClientsByDniHandler(req, res, next);
    };

    return getActivePersonClientsHandler(req, res, next);
});

personClientRouter.post('/', postPersonClientHandler);

module.exports = personClientRouter;