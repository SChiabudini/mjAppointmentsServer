const serviceSheetRouter = require('express').Router();
const { getServiceSheetsHandler, postServiceSheetHandler } = require('../handlers/serviceSheetHandlers/indexHandlers.js');

serviceSheetRouter.get('/', getServiceSheetsHandler);
serviceSheetRouter.post('/', postServiceSheetHandler);

module.exports = serviceSheetRouter;