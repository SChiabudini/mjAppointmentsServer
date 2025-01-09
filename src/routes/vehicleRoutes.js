const vehicleRouter = require('express').Router();
const { getVehiclesHandler, getActiveVehiclesHandler, getVehicleByIdHandler, getVehiclesByLicensePlateHandler, getVehiclesByClientHandler, getActiveVehiclesByClientHandler, getActiveVehiclesByLicensePlateHandler, postVehicleHandler, putVehicleHandler } = require('../handlers/vehicleHandlers/indexHandlers.js');

vehicleRouter.get('/all', (req, res, next) => {
    const { licensePlate, client } = req.query;

    if (licensePlate) {
        return getVehiclesByLicensePlateHandler(req, res, next);
    };

    if (client) {
        return getVehiclesByClientHandler(req, res, next);
    };

    return getVehiclesHandler(req, res, next);
});


vehicleRouter.get('/', (req, res, next) => {
    const { licensePlate, client } = req.query;

    if (licensePlate) {
        return getActiveVehiclesByLicensePlateHandler(req, res, next);
    };

    if (client) {
        return getActiveVehiclesByClientHandler(req, res, next);
    };

    return getActiveVehiclesHandler(req, res, next);
});

vehicleRouter.get('/:id', getVehicleByIdHandler);

vehicleRouter.post('/', postVehicleHandler);

vehicleRouter.put('/', putVehicleHandler);

module.exports = vehicleRouter;