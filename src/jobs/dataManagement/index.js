const deleteExpiredAppointmentsHandler = require("./purge/deleteExpiredAppointmentsHandler.js");
const deleteExpiredBudgetsHandler = require("./purge/deleteExpiredBudgetsHandler.js");

module.exports = {
    deleteExpiredAppointmentsHandler,
    deleteExpiredBudgetsHandler
}