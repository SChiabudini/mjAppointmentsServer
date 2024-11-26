const personClientRouter = require('express').Router();
const { getPersonClientsHandler, getPersonClientByIdHandler, getActivePersonClientsHandler, getPersonClientsByDniHandler, getActivePersonClientsByDniHandler, getPersonClientsByNameHandler, getActivePersonClientsByNameHandler, postPersonClientHandler } = require('../handlers/personClientHandlers/indexHandlers.js');

personClientRouter.get('/all', (req, res, next) => {
    const { dni, name } = req.query;

    if (dni) {
        return getPersonClientsByDniHandler(req, res, next);
    };

    if (name) {
        return getPersonClientsByNameHandler(req, res, next);
    };

    return getPersonClientsHandler(req, res, next);
});

personClientRouter.get('/', (req, res, next) => {
    const { dni, name } = req.query;

    if (dni) {
        return getActivePersonClientsByDniHandler(req, res, next);
    };

    if (name) {
        return getActivePersonClientsByNameHandler(req, res, next);
    };

    return getActivePersonClientsHandler(req, res, next);
});

personClientRouter.get('/:id', getPersonClientByIdHandler);

personClientRouter.post('/', postPersonClientHandler);

module.exports = personClientRouter;