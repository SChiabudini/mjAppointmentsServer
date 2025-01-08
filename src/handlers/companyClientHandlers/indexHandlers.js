const getCompanyClientsHandler = require('./getCompanyClientsHandler.js');
const getCompanyClientByIdHandler = require('./getCompanyClientByIdHandler.js');
const getActiveCompanyClientsHandler = require('./getActiveCompanyClientsHandler.js');
const getCompanyClientsByCuitHandler = require('./getCompanyClientsByCuitHandler.js');
const getActiveCompanyClientsByCuitHandler = require('./getActiveCompanyClientsByCuitHandler.js');
const getCompanyClientsByNameHandler = require('./getCompanyClientsByNameHandler.js');
const getActiveCompanyClientsByNameHandler = require('./getActiveCompanyClientsByNameHandler.js');
const getActiveCompanyClientsByVehicleHandler = require('./getActiveCompanyClientsByVehicleHandler.js');
const getCompanyClientsByVehicleHandler = require('./getCompanyClientsByVehicleHandler.js');
const postCompanyClientHandler = require('./postCompanyClientHandler.js');
const putCompanyClientHandler = require('./putCompanyClientHandler.js');

module.exports = {
    getCompanyClientsHandler,
    getCompanyClientByIdHandler,
    getActiveCompanyClientsHandler,
    getCompanyClientsByCuitHandler,
    getActiveCompanyClientsByCuitHandler,
    getCompanyClientsByNameHandler,
    getActiveCompanyClientsByNameHandler,
    getActiveCompanyClientsByVehicleHandler,
    getCompanyClientsByVehicleHandler,
    postCompanyClientHandler,
    putCompanyClientHandler
}