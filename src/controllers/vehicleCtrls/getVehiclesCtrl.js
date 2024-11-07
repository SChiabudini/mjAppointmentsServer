require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const getVehiclesCtrl = async () => {
    const vehicles = await Vehicle.find().populate('personClient').populate('companyClient');

    return vehicles;
};

module.exports = getVehiclesCtrl;