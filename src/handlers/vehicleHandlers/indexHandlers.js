const getVehiclesHandler = require('./getVehiclesHandler.js');
const getActiveVehiclesHandler = require('./getActiveVehiclesHandler.js');
const getVehicleByIdHandler = require('./getVehicleByIdHandler.js');
const getVehiclesByLicensePlateHandler = require('./getVehiclesByLicensePlateHandler.js');
const getActiveVehiclesByClientHandler = require('./getActiveVehiclesByClientHandler.js');
const getActiveVehiclesByLicensePlateHandler = require('./getActiveVehiclesByLicensePlateHandler.js');
const postVehicleHandler = require('./postVehicleHandler.js');

module.exports = {
    getVehiclesHandler,
    getActiveVehiclesHandler,
    getVehicleByIdHandler,
    getVehiclesByLicensePlateHandler,
    getActiveVehiclesByClientHandler,
    getActiveVehiclesByLicensePlateHandler,
    postVehicleHandler
}