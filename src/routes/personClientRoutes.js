const personClientRouter = require('express').Router();
const { getPersonClientsHandler, getPersonClientsByDniHandler, postPersonClientHandler } = require('../handlers/personClientHandlers/indexHandlers.js');

personClientRouter.get('/', (req, res, next) => {
    const { dni } = req.query;

    if (dni) {
        return getPersonClientsByDniHandler(req, res, next);
    };

    return getPersonClientsHandler(req, res, next);
});

personClientRouter.post('/', postPersonClientHandler);

module.exports = personClientRouter;