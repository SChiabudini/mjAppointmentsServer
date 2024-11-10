const appointmentRouter = require('express').Router();
const { postAppointmentHandler } = require('../handlers/appointmentHandlers/indexHandlers.js');

//appointmentRouter.get('/', getAppointmentsHandler);
appointmentRouter.post('/', postAppointmentHandler);

module.exports = appointmentRouter;