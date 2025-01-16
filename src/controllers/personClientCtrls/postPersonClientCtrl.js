const PersonClient = require('../../collections/PersonClient.js');
const putVehicleAddPersonClientCtrl = require('../vehicleCtrls/putVehicleAddPersonClientCtrl.js');

const postPersonClientCtrl = async (dni, name, email, phones, phoneWsp, cuilCuit, vehicles) => {

    const newPersonClient = {
        dni,
        name,
        email,
        phones,
        phoneWsp,
        cuilCuit,
        vehicles
    };

    const createdPersonClient = await PersonClient.create(newPersonClient);

    if (vehicles && vehicles.length > 0) {
        for (const vehicle of vehicles) {
            await putVehicleAddPersonClientCtrl(vehicle, createdPersonClient._id);
        }
    }

    return createdPersonClient;
};

module.exports = postPersonClientCtrl;