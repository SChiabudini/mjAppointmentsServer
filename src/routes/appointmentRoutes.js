const appointmentRouter = require('express').Router();
const { getAppointmentsHandler, getActiveAppointmentsHandler, getAppointmentByIdHandler, postAppointmentHandler } = require('../handlers/appointmentHandlers/indexHandlers.js');

appointmentRouter.get('/all', getAppointmentsHandler);
appointmentRouter.get('/', getActiveAppointmentsHandler);
appointmentRouter.get('/:id', getAppointmentByIdHandler);
appointmentRouter.post('/', postAppointmentHandler);

module.exports = appointmentRouter;