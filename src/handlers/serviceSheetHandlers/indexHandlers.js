const getServiceSheetsHandler = require('./getServiceSheetsHandler.js');
const getActiveServiceSheetsHandler = require('./getActiveServiceSheetsHandler.js');
const getActiveServiceSheetsByClientHandler = require('./getActiveServiceSheetsByClientHandler.js');
const getServiceSheetsByClientHandler = require('./getServiceSheetsByClientHandler.js');
const getActiveServiceSheetsByNumberHandler = require('./getActiveServiceSheetsByNumberHandler.js');
const getServiceSheetsByNumberHandler = require('./getServiceSheetsByNumberHandler.js');
const getActiveServiceSheetsByVehicleHandler = require('./getActiveServiceSheetsByVehicleHandler.js');
const getServiceSheetsByVehicleHandler = require('./getServiceSheetsByVehicleHandler.js');
const postServiceSheetHandler = require('./postServiceSheetHandler.js');

module.exports = {
    getServiceSheetsHandler,
    getActiveServiceSheetsHandler,
    getActiveServiceSheetsByClientHandler,
    getServiceSheetsByClientHandler,
    getActiveServiceSheetsByNumberHandler,
    getServiceSheetsByNumberHandler,
    getActiveServiceSheetsByVehicleHandler,
    getServiceSheetsByVehicleHandler,
    postServiceSheetHandler
}