require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const getActiveVehiclesByLicensePlateCtrl = async (licensePlate) => {

  const regex = new RegExp(`.*${licensePlate}.*`, 'i');

  if (licensePlate) {
    const activeVehicles = await Vehicle.find({ licensePlate: regex, active: true })
    .populate('personClient')
    .populate('companyClient');

    return activeVehicles;
  };
};

module.exports = getActiveVehiclesByLicensePlateCtrl; 