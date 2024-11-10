const procedureSheetRouter = require('express').Router();
const { getProcedureSheetsHandler, postProcedureSheetHandler } = require('../handlers/procedureSheetHandlers/indexHandlers.js');

procedureSheetRouter.get('/', getProcedureSheetsHandler);
procedureSheetRouter.post('/', postProcedureSheetHandler);

module.exports = procedureSheetRouter;