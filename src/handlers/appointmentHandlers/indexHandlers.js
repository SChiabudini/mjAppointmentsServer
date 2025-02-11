const getAppointmentsHandler = require('./getAppointmentsHandler.js');
const getActiveAppointmentsHandler = require('./getActiveAppointmentsHandler.js');
const getAppointmentByIdHandler = require('./getAppointmentsByIdHandler.js');
const postAppointmentHandler = require('./postAppointmentHandler.js');
const putAppointmentHandler = require('./putAppointmentHandler.js');
const putAppointmentStatusHandler = require('./putAppointmentStatusHandler.js');
//const deleteExpiredAppointmentsHandler = require('./deleteExpiredAppointmentsHandler.js');

module.exports = {
    getAppointmentsHandler,
    getActiveAppointmentsHandler,
    getAppointmentByIdHandler,
    postAppointmentHandler,
    putAppointmentHandler,
    putAppointmentStatusHandler,
    //deleteExpiredAppointmentsHandler
}