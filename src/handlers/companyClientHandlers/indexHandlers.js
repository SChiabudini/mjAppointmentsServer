const getCompanyClientsHandler = require('./getCompanyClientsHandler.js');
const getActiveCompanyClientsHandler = require('./getActiveCompanyClientsHandler.js');
const getCompanyClientsByCuitHandler = require('./getCompanyClientsByCuitHandler.js');
const postCompanyClientHandler = require('./postCompanyClientHandler.js');

module.exports = {
    getCompanyClientsHandler,
    getActiveCompanyClientsHandler,
    getCompanyClientsByCuitHandler,
    postCompanyClientHandler
}