const budgetRouter = require('express').Router();
const { getBudgetsHandler, getActiveBudgetsHandler, getBudgetByIdHandler, postBudgetHandler } = require('../handlers/budgetHandlers/indexHandlers.js');

budgetRouter.get('/all', getBudgetsHandler);
budgetRouter.get('/', getActiveBudgetsHandler);
budgetRouter.get('/:id', getBudgetByIdHandler);
budgetRouter.post('/', postBudgetHandler);

module.exports = budgetRouter;