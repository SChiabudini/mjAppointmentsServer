require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const getActiveVehiclesCtrl = async () => {
    const activeVehicles = await Vehicle.find({ active: true })
    .populate('personClient')
    .populate('companyClient');

    return activeVehicles;
};

module.exports = getActiveVehiclesCtrl;