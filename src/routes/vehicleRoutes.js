const vehicleRouter = require('express').Router();
const { getVehiclesHandler, getActiveVehiclesHandler, getVehiclesByLicensePlateHandler, postVehicleHandler } = require('../handlers/vehicleHandlers/indexHandlers.js');

vehicleRouter.get('/all', postVehicleHandler);

vehicleRouter.get('/', (req, res, next) => {
    const { licensePlate } = req.query;

    if (licensePlate) {
        return getVehiclesByLicensePlateHandler(req, res, next);
    };

    return getActiveVehiclesHandler(req, res, next);
});

vehicleRouter.post('/', postVehicleHandler);

module.exports = vehicleRouter;