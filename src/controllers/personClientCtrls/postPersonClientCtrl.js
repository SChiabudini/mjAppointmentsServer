const PersonClient = require('../../collections/PersonClient.js');

const postPersonClientCtrl = async (dni, name, email, phones, cuilCuit) => {

    const newPersonClient = {
        dni,
        name,
        email,
        phones,
        cuilCuit
    };

    const createdPersonClient = await PersonClient.create(newPersonClient);

    return createdPersonClient;
};

module.exports = postPersonClientCtrl;