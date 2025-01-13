const serviceSheetRouter = require('express').Router();
const { getServiceSheetsHandler, getActiveServiceSheetsHandler, getActiveServiceSheetsByClientHandler, getServiceSheetsByClientHandler, getActiveServiceSheetsByNumberHandler, getServiceSheetsByNumberHandler, getActiveServiceSheetsByVehicleHandler, getServiceSheetsByVehicleHandler, getServiceSheetByIdHandler, postServiceSheetHandler, putServiceSheetHandler } = require('../handlers/serviceSheetHandlers/indexHandlers.js');

serviceSheetRouter.get('/all', (req, res, next) => {

    const { client, number, vehicle } = req.query;

    if(client){
        return getServiceSheetsByClientHandler(req, res, next);
    };

    if(number){
        return getServiceSheetsByNumberHandler(req, res, next);
    };

    if(vehicle){
        return getServiceSheetsByVehicleHandler(req, res, next);
    };

    return getServiceSheetsHandler(req, res, next);

});

serviceSheetRouter.get('/', (req, res, next) => {

    const { client, number, vehicle } = req.query;

    if(client){
        return getActiveServiceSheetsByClientHandler(req, res, next);
    };

    if(number){
        return getActiveServiceSheetsByNumberHandler(req, res, next);
    };

    if(vehicle){
        return getActiveServiceSheetsByVehicleHandler(req, res, next);
    };

    return getActiveServiceSheetsHandler(req, res, next);

});

serviceSheetRouter.get('/:id', getServiceSheetByIdHandler);

serviceSheetRouter.post('/', postServiceSheetHandler);

serviceSheetRouter.put('/', putServiceSheetHandler);

module.exports = serviceSheetRouter;