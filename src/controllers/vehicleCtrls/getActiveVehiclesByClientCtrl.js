require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const getActiveVehiclesByClientCtrl = async (client) => {

  const regex = new RegExp(`.*${client}.*`, 'i');

  if (client) {
    const activeVehicles = await Vehicle.find({ licensePlate: regex, active: true })
    .populate('personClient')
    .populate('companyClient');

    return activeVehicles;
  };
};

module.exports = getActiveVehiclesByClientCtrl; 