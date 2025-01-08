const budgetRouter = require('express').Router();
const { getBudgetsHandler, getActiveBudgetsHandler, getBudgetByIdHandler, getActiveBudgetsByNumberHandler, getBudgetsByNumberHandler, getActiveBudgetsByClientHandler, getBudgetsByClientHandler, getActiveBudgetsByVehicleHandler, getBudgetsByVehicleHandler, postBudgetHandler } = require('../handlers/budgetHandlers/indexHandlers.js');

budgetRouter.get('/all', (req, res, next) => {

    const { client, number, vehicle } = req.query;

    if(client){
        return getBudgetsByClientHandler(req, res, next);
    };

    if(number){
        return getBudgetsByNumberHandler(req, res, next);
    };

    if(vehicle){
        return getBudgetsByVehicleHandler(req, res, next);
    };

    return getBudgetsHandler(req, res, next);

});

budgetRouter.get('/', (req, res, next) => {

    const { client, number, vehicle } = req.query;

    if(client){
        return getActiveBudgetsByClientHandler(req, res, next);
    };

    if(number){
        return getActiveBudgetsByNumberHandler(req, res, next);
    };

    if(vehicle){
        return getActiveBudgetsByVehicleHandler(req, res, next);
    };

    return getActiveBudgetsHandler(req, res, next);

});

budgetRouter.get('/:id', getBudgetByIdHandler);

budgetRouter.post('/', postBudgetHandler);

module.exports = budgetRouter;