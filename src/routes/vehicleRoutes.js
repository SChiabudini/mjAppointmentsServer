const vehicleRouter = require('express').Router();
const { getVehiclesHandler, getActiveVehiclesHandler, getVehicleByIdHandler, getVehiclesByLicensePlateHandler, getActiveVehiclesByLicensePlateHandler, postVehicleHandler } = require('../handlers/vehicleHandlers/indexHandlers.js');

vehicleRouter.get('/all', (req, res, next) => {
    const { licensePlate } = req.query;

    if (licensePlate) {
        return getVehiclesByLicensePlateHandler(req, res, next);
    };

    return getVehiclesHandler(req, res, next);
});


vehicleRouter.get('/', (req, res, next) => {
    const { licensePlate } = req.query;

    if (licensePlate) {
        return getActiveVehiclesByLicensePlateHandler(req, res, next);
    };

    return getActiveVehiclesHandler(req, res, next);
});

vehicleRouter.get('/:id', getVehicleByIdHandler);

vehicleRouter.post('/', postVehicleHandler);

module.exports = vehicleRouter;