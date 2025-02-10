const appointmentRouter = require('express').Router();
const { getAppointmentsHandler, getActiveAppointmentsHandler, getAppointmentByIdHandler, postAppointmentHandler, putAppointmentHandler, putAppointmentStatusHandler, deleteExpiredAppointmentsHandler } = require('../handlers/appointmentHandlers/indexHandlers.js');

appointmentRouter.get('/all', getAppointmentsHandler);
appointmentRouter.get('/', getActiveAppointmentsHandler);
appointmentRouter.get('/:id', getAppointmentByIdHandler);
appointmentRouter.post('/', postAppointmentHandler);
appointmentRouter.put('/', putAppointmentHandler);
//appointmentRouter.delete('/', deleteExpiredAppointmentsHandler);
appointmentRouter.put('/status/:id', putAppointmentStatusHandler);


module.exports = appointmentRouter;