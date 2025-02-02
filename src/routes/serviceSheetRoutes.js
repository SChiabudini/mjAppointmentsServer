const serviceSheetRouter = require('express').Router();
const { getServiceSheetsHandler, getActiveServiceSheetsHandler, getActiveServiceSheetsByClientHandler, getServiceSheetsByClientHandler, getActiveServiceSheetsByNumberHandler, getServiceSheetsByNumberHandler, getActiveServiceSheetsByVehicleHandler, getServiceSheetsByVehicleHandler, getActiveServiceSheetsByDateHandler, getServiceSheetsByDateHandler, getServiceSheetByIdHandler, postServiceSheetHandler, putServiceSheetHandler, putServiceSheetStatusHandler } = require('../handlers/serviceSheetHandlers/indexHandlers.js');

serviceSheetRouter.get('/all', (req, res, next) => {

    const { client, number, vehicle, start, end } = req.query;

    if(client){
        return getServiceSheetsByClientHandler(req, res, next);
    };

    if(number){
        return getServiceSheetsByNumberHandler(req, res, next);
    };

    if(vehicle){
        return getServiceSheetsByVehicleHandler(req, res, next);
    };

    if(start && end){
        return getServiceSheetsByDateHandler(req, res, next);
    };

    return getServiceSheetsHandler(req, res, next);

});

serviceSheetRouter.get('/', (req, res, next) => {

    const { client, number, vehicle, start, end } = req.query;

    if(client){
        return getActiveServiceSheetsByClientHandler(req, res, next);
    };

    if(number){
        return getActiveServiceSheetsByNumberHandler(req, res, next);
    };

    if(vehicle){
        return getActiveServiceSheetsByVehicleHandler(req, res, next);
    };

    if(start && end){
        return getActiveServiceSheetsByDateHandler(req, res, next);
    };

    return getActiveServiceSheetsHandler(req, res, next);

});

serviceSheetRouter.get('/:id', getServiceSheetByIdHandler);

serviceSheetRouter.post('/', postServiceSheetHandler);

serviceSheetRouter.put('/', putServiceSheetHandler);

serviceSheetRouter.put('/status/:id', putServiceSheetStatusHandler);

module.exports = serviceSheetRouter;