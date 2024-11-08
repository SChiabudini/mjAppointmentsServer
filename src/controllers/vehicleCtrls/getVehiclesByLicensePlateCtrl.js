require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const getVehiclesByLicensePlateCtrl = async (licensePlate) => {

  const regex = new RegExp(`.*${licensePlate}.*`, 'i');

  if (licensePlate) {
    const vehicles = await Vehicle.find({ licensePlate: regex }).populate('personClient').populate('companyClient');
    return vehicles;
  };
};

module.exports = getVehiclesByLicensePlateCtrl; 