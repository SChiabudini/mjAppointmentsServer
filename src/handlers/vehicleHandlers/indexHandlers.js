const getVehiclesHandler = require('./getVehiclesHandler.js');
const getActiveVehiclesHandler = require('./getActiveVehiclesHandler.js');
const getVehicleByIdHandler = require('./getVehicleByIdHandler.js');
const getVehiclesByLicensePlateHandler = require('./getVehiclesByLicensePlateHandler.js');
const getVehiclesByClientHandler = require('./getVehiclesByClientHandler.js');
const getActiveVehiclesByClientHandler = require('./getActiveVehiclesByClientHandler.js');
const getActiveVehiclesByLicensePlateHandler = require('./getActiveVehiclesByLicensePlateHandler.js');
const postVehicleHandler = require('./postVehicleHandler.js');
const putVehicleHandler = require('./putVehicleHandler.js');
const putVehicleStatusHandler = require('./putVehicleStatusHandler.js');

module.exports = {
    getVehiclesHandler,
    getActiveVehiclesHandler,
    getVehicleByIdHandler,
    getVehiclesByLicensePlateHandler,
    getVehiclesByClientHandler,
    getActiveVehiclesByClientHandler,
    getActiveVehiclesByLicensePlateHandler,
    postVehicleHandler,
    putVehicleHandler,
    putVehicleStatusHandler
}