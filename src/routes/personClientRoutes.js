const personClientRouter = require('express').Router();
const { getPersonClientsHandler, getPersonClientByIdHandler, getActivePersonClientsHandler, getPersonClientsByDniHandler, getActivePersonClientsByDniHandler, getPersonClientsByNameHandler, getActivePersonClientsByNameHandler, getActivePersonClientsByVehicleHandler, getPersonClientsByVehicleHandler, postPersonClientHandler, putPersonClientHandler } = require('../handlers/personClientHandlers/indexHandlers.js');

personClientRouter.get('/all', (req, res, next) => {
    const { dni, name, vehicle } = req.query;

    if (dni) {
        return getPersonClientsByDniHandler(req, res, next);
    };

    if (name) {
        return getPersonClientsByNameHandler(req, res, next);
    };

    if (vehicle) {
        return getPersonClientsByVehicleHandler(req, res, next);
    }

    return getPersonClientsHandler(req, res, next);
});

personClientRouter.get('/', (req, res, next) => {
    const { dni, name, vehicle } = req.query;

    if (dni) {
        return getActivePersonClientsByDniHandler(req, res, next);
    };

    if (name) {
        return getActivePersonClientsByNameHandler(req, res, next);
    };

    if (vehicle) {
        return getActivePersonClientsByVehicleHandler(req, res, next);
    }

    return getActivePersonClientsHandler(req, res, next);
});

personClientRouter.get('/:id', getPersonClientByIdHandler);

personClientRouter.post('/', postPersonClientHandler);

personClientRouter.put('/', putPersonClientHandler);

module.exports = personClientRouter;