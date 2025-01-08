const getPersonClientsHandler = require('./getPersonClientsHandler.js');
const getPersonClientByIdHandler = require('./getPersonClientByIdHandler.js');
const getActivePersonClientsHandler = require('./getActivePersonClientsHandler.js');
const getPersonClientsByDniHandler = require('./getPersonClientsByDniHandler.js');
const getActivePersonClientsByDniHandler = require('./getActivePersonClientsByDniHandler.js');
const getPersonClientsByNameHandler = require('./getPersonClientsByNameHandler.js');
const getActivePersonClientsByNameHandler = require('./getActivePersonClientsByNameHandler.js');
const getActivePersonClientsByVehicleHandler = require('./getActivePersonClientsByVehicleHandler.js');
const getPersonClientsByVehicleHandler = require ('./getPersonClientsByVehicleHandler.js');
const postPersonClientHandler = require('./postPersonClientHandler.js');
const putPersonClientHandler = require('./putPersonClientHandlers.js');

module.exports = {
    getPersonClientsHandler,
    getPersonClientByIdHandler,
    getActivePersonClientsHandler,
    getPersonClientsByDniHandler,
    getActivePersonClientsByDniHandler,
    getPersonClientsByNameHandler,
    getActivePersonClientsByNameHandler,
    getActivePersonClientsByVehicleHandler,
    getPersonClientsByVehicleHandler,
    postPersonClientHandler,
    putPersonClientHandler
}