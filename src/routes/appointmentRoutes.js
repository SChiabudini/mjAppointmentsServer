const appointmentRouter = require('express').Router();
const { getAppointmentsHandler, getActiveAppointmentsHandler, postAppointmentHandler } = require('../handlers/appointmentHandlers/indexHandlers.js');

appointmentRouter.get('/all', getAppointmentsHandler);
appointmentRouter.get('/', getActiveAppointmentsHandler);
appointmentRouter.post('/', postAppointmentHandler);

module.exports = appointmentRouter;