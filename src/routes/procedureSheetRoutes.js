const procedureSheetRouter = require('express').Router();
const { getProcedureSheetsHandler, getActiveProcedureSheetsHandler, postProcedureSheetHandler } = require('../handlers/procedureSheetHandlers/indexHandlers.js');


procedureSheetRouter.get('/all', getProcedureSheetsHandler);
procedureSheetRouter.get('/', getActiveProcedureSheetsHandler);
procedureSheetRouter.post('/', postProcedureSheetHandler);

module.exports = procedureSheetRouter;