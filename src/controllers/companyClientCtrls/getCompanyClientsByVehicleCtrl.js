require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getCompanyClientsByVehicleCtrl = async (licensePlate) => {
    
  const normalizeString = (str) => 
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const regex = new RegExp(normalizeString(licensePlate), 'i');

  const clients = await CompanyClient.find()
    .populate('vehicles', 'licensePlate');

  return clients.filter(client =>
    client.vehicles.some(vehicle =>
      regex.test(normalizeString(vehicle.licensePlate))
    )
  );
};

module.exports = getCompanyClientsByVehicleCtrl;