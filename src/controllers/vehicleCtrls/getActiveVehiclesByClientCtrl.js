require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const getActiveVehiclesByClientCtrl = async (client) => {

  const normalizeString = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(normalizeString(client), 'i');

  const vehicles = await Vehicle.find({ active: true })
    .populate('personClient', 'name')
    .populate('companyClient', 'name');

  return vehicles.filter(
    (vehicle) =>
      (vehicle.personClient && regex.test(normalizeString(vehicle.personClient.name))) ||
      (vehicle.companyClient && regex.test(normalizeString(vehicle.companyClient.name)))
  );
};

module.exports = getActiveVehiclesByClientCtrl; 