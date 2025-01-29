const getBudgetsHandler = require('./getBudgetsHandler.js');
const getActiveBudgetsHandler = require('./getActiveBudgetsHandler.js');
const getBudgetByIdHandler = require('./getBudgetByIdHandler.js');
const getActiveBudgetsByNumberHandler = require('./getActiveBudgetsByNumberHandler.js');
const getBudgetsByNumberHandler = require('./getBudgetsByNumberHandler.js');
const getActiveBudgetsByClientHandler = require('./getActiveBudgetsByClientHandler.js');
const getBudgetsByClientHandler = require('./getBudgetsByClientHandler.js');
const getActiveBudgetsByVehicleHandler = require('./getActiveBudgetsByVehicleHandler.js');
const getBudgetsByVehicleHandler = require('./getBudgetsByVehicleHandler.js');
const postBudgetHandler = require('./postBudgetHandler.js');
const putBudgetHandler = require('./putBudgetHandler.js');
const putBudgetStatusHandler = require('./putBudgetStatusHandler.js');

module.exports = {
    getBudgetsHandler,
    getActiveBudgetsHandler,
    getBudgetByIdHandler,
    getActiveBudgetsByNumberHandler,
    getBudgetsByNumberHandler,
    getActiveBudgetsByClientHandler,
    getBudgetsByClientHandler,
    getActiveBudgetsByVehicleHandler,
    getBudgetsByVehicleHandler,
    postBudgetHandler,
    putBudgetHandler,
    putBudgetStatusHandler
}