require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const getVehiclesByClientCtrl = async (client) => {

  const normalizeString = (str) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(normalizeString(client), 'i');

  const vehicles = await Vehicle.find()
    .populate('personClient', 'name normalizedName')
    .populate('companyClient', 'name normalizedName');

  return vehicles.filter((vehicle) => {
    const personClient = vehicle.personClient;
    const companyClient = vehicle.companyClient;

    return (
      (personClient &&
        (regex.test(normalizeString(personClient.name)) ||
          (personClient.normalizedName && regex.test(personClient.normalizedName)))) ||
      (companyClient &&
        (regex.test(normalizeString(companyClient.name)) ||
          (companyClient.normalizedName && regex.test(companyClient.normalizedName))))
    );
  });
};

module.exports = getVehiclesByClientCtrl; 