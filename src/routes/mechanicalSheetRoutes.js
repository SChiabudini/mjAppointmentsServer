const mechanicalSheetRouter = require('express').Router();
const { getMechanicalSheetsHandler, getActiveMechanicalSheetsHandler, postMechanicalSheetHandler } = require('../handlers/mechanicalSheetHandlers/indexHandlers.js');


mechanicalSheetRouter.get('/all', getMechanicalSheetsHandler);
mechanicalSheetRouter.get('/', getActiveMechanicalSheetsHandler);
mechanicalSheetRouter.post('/', postMechanicalSheetHandler);

module.exports = mechanicalSheetRouter;