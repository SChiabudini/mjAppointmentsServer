require('dotenv').config();
const connection = require('./src/db.js')
const server = require('./src/app.js');
const startScheduledJobs = require('./src/jobs/index.js');

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log('listening at 8000');
    startScheduledJobs();
    console.log("La hora actual del servidor es:", new Date());
}); 

connection();

