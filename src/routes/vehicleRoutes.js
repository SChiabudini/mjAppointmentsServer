const vehicleRouter = require('express').Router();
const { getVehiclesHandler, getVehiclesByLicensePlateHandler, postVehicleHandler } = require('../handlers/vehicleHandlers/indexHandlers.js');

vehicleRouter.get('/', (req, res, next) => {
    const { licensePlate } = req.query;

    if (licensePlate) {
        return getVehiclesByLicensePlateHandler(req, res, next);
    };

    return getVehiclesHandler(req, res, next);
});

vehicleRouter.post('/', postVehicleHandler);

module.exports = vehicleRouter;