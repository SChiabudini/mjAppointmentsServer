const serviceSheetRouter = require('express').Router();
const { getServiceSheetsHandler, getActiveServiceSheetsHandler, postServiceSheetHandler } = require('../handlers/serviceSheetHandlers/indexHandlers.js');

serviceSheetRouter.get('/all', getServiceSheetsHandler);
serviceSheetRouter.get('/', getActiveServiceSheetsHandler);
serviceSheetRouter.post('/', postServiceSheetHandler);

module.exports = serviceSheetRouter;