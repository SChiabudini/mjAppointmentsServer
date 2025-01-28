const mechanicalSheetRouter = require('express').Router();
const { getMechanicalSheetsHandler, getActiveMechanicalSheetsHandler, getActiveMechanicalSheetsByClientHandler, getMechanicalSheetsByClientHandler, getActiveMechanicalSheetsByKeyWordsHandler, getMechanicalSheetsByKeyWordsHandler, getActiveMechanicalSheetsByNumberHandler, getMechanicalSheetsByNumberHandler, getActiveMechanicalSheetsByVehicleHandler, getMechanicalSheetsByVehicleHandler, getActiveMechanicalSheetsByDateHandler, getMechanicalSheetsByDateHandler, getMechanicalSheetByIdCtrl, postMechanicalSheetHandler, putMechanicalSheetHandler, putMechanicalSheetStatusHandler } = require('../handlers/mechanicalSheetHandlers/indexHandlers.js');

mechanicalSheetRouter.get('/all', (req, res, next) => {

    const { client, keyWords, number, vehicle } = req.query;

    if(client){
        return getMechanicalSheetsByClientHandler(req, res, next);
    };

    if(keyWords){
        return getMechanicalSheetsByKeyWordsHandler(req, res, next);
    };

    if(number){
        return getMechanicalSheetsByNumberHandler(req, res, next);
    };

    if(vehicle){
        return getMechanicalSheetsByVehicleHandler(req, res, next);
    };

    return getMechanicalSheetsHandler(req, res, next);

});

mechanicalSheetRouter.get('/all/date', getMechanicalSheetsByDateHandler);

mechanicalSheetRouter.get('/', (req, res, next) => {

    const { client, keyWords, number, vehicle } = req.query;

    if(client){
        return getActiveMechanicalSheetsByClientHandler(req, res, next);
    };

    if(keyWords){
        return getActiveMechanicalSheetsByKeyWordsHandler(req, res, next);
    };

    if(number){
        return getActiveMechanicalSheetsByNumberHandler(req, res, next);
    };

    if(vehicle){
        return getActiveMechanicalSheetsByVehicleHandler(req, res, next);
    };

    return getActiveMechanicalSheetsHandler(req, res, next);

});

mechanicalSheetRouter.get('/date', getActiveMechanicalSheetsByDateHandler);

mechanicalSheetRouter.get('/:id', getMechanicalSheetByIdCtrl);

mechanicalSheetRouter.post('/', postMechanicalSheetHandler);

mechanicalSheetRouter.put('/', putMechanicalSheetHandler);

mechanicalSheetRouter.put('/status/:id', putMechanicalSheetStatusHandler);

module.exports = mechanicalSheetRouter;