const getPersonClientsHandler = require('./getPersonClientsHandler.js');
const getActivePersonClientsHandler = require('./getActivePersonClientsHandler.js');
const getPersonClientsByDniHandler = require('./getPersonClientsByDniHandler.js');
const getActivePersonClientsByDniHandler = require('./getActivePersonClientsByDniHandler.js');
const postPersonClientHandler = require('./postPersonClientHandler.js');

module.exports = {
    getPersonClientsHandler,
    getActivePersonClientsHandler,
    getPersonClientsByDniHandler,
    getActivePersonClientsByDniHandler,
    postPersonClientHandler
}