const getVehiclesHandler = require('./getVehiclesHandler.js');
const getActiveVehiclesHandler = require('./getActiveVehiclesHandler.js');
const getVehiclesByLicensePlateHandler = require('./getVehiclesByLicensePlateHandler.js');
const getActiveVehiclesByLicensePlateHandler = require('./getActiveVehiclesByLicensePlateHandler.js');
const postVehicleHandler = require('./postVehicleHandler.js');

module.exports = {
    getVehiclesHandler,
    getActiveVehiclesHandler,
    getVehiclesByLicensePlateHandler,
    getActiveVehiclesByLicensePlateHandler,
    postVehicleHandler
}