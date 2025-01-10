const appointmentRouter = require('express').Router();
const { getAppointmentsHandler, getActiveAppointmentsHandler, getAppointmentByIdHandler, postAppointmentHandler, putAppointmentHandler } = require('../handlers/appointmentHandlers/indexHandlers.js');

appointmentRouter.get('/all', getAppointmentsHandler);
appointmentRouter.get('/', getActiveAppointmentsHandler);
appointmentRouter.get('/:id', getAppointmentByIdHandler);
appointmentRouter.post('/', postAppointmentHandler);
appointmentRouter.put('/', putAppointmentHandler);

module.exports = appointmentRouter;