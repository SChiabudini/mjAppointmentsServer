const getServiceSheetsHandler = require('./getServiceSheetsHandler.js');
const getActiveServiceSheetsHandler = require('./getActiveServiceSheetsHandler.js');
const getActiveServiceSheetsByClientHandler = require('./getActiveServiceSheetsByClientHandler.js');
const getServiceSheetsByClientHandler = require('./getServiceSheetsByClientHandler.js');
const getActiveServiceSheetsByNumberHandler = require('./getActiveServiceSheetsByNumberHandler.js');
const getServiceSheetsByNumberHandler = require('./getServiceSheetsByNumberHandler.js');
const getActiveServiceSheetsByVehicleHandler = require('./getActiveServiceSheetsByVehicleHandler.js');
const getServiceSheetsByVehicleHandler = require('./getServiceSheetsByVehicleHandler.js');
const getActiveServiceSheetsByDateHandler = require('./getActiveServiceSheetsByDateHandler.js');
const getServiceSheetsByDateHandler = require('./getServiceSheetsByDateHandler.js');
const getServiceSheetByIdHandler = require('./getServiceSheetByIdHandler.js');
const postServiceSheetHandler = require('./postServiceSheetHandler.js');
const putServiceSheetHandler = require('./putServiceSheetHandler.js');
const putServiceSheetStatusHandler = require('./putServiceSheetStatusHandler.js');

module.exports = {
    getServiceSheetsHandler,
    getActiveServiceSheetsHandler,
    getActiveServiceSheetsByClientHandler,
    getServiceSheetsByClientHandler,
    getActiveServiceSheetsByNumberHandler,
    getServiceSheetsByNumberHandler,
    getActiveServiceSheetsByVehicleHandler,
    getServiceSheetsByVehicleHandler,
    getServiceSheetByIdHandler,
    getActiveServiceSheetsByDateHandler,
    getServiceSheetsByDateHandler,
    postServiceSheetHandler,
    putServiceSheetHandler,
    putServiceSheetStatusHandler
}