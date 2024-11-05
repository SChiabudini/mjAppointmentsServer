require('dotenv').config();
const connection = require('./src/db.js')
const server = require('./src/app.js');

const port = process.env.PORT || 8000;

// Primero conectarse a la base de datos
connection().then(() => {
    // Solo iniciar el servidor si la conexión es exitosa
    server.listen(port, () => {
        console.log(`Server listening at port ${port}`); 
    });
}).catch(err => {
    console.error('Error al conectar a la base de datos', err);
});
