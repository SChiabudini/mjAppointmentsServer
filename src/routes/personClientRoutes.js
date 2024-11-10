const personClientRouter = require('express').Router();
const { getPersonClientsHandler, getActivePersonClientsHandler, getPersonClientsByDniHandler, postPersonClientHandler } = require('../handlers/personClientHandlers/indexHandlers.js');

personClientRouter.get('/all', getPersonClientsHandler);

personClientRouter.get('/', (req, res, next) => {
    const { dni } = req.query;

    if (dni) {
        return getPersonClientsByDniHandler(req, res, next);
    };

    return getActivePersonClientsHandler(req, res, next);
});

personClientRouter.post('/', postPersonClientHandler);

module.exports = personClientRouter;