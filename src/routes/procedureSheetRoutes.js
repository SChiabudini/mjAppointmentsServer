const procedureSheetRouter = require('express').Router();
const { postProcedureSheetHandler } = require('../handlers/procedureSheetHandlers/indexHandlers.js');

//procedureSheetRouter.get('/', getProcedureSheetsHandler);
procedureSheetRouter.post('/', postProcedureSheetHandler);

module.exports = procedureSheetRouter;