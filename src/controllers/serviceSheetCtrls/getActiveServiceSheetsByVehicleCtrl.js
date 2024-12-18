require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getActiveServiceSheetsByVehicleCtrl = async (licensePlate) => {

  const normalizeString = (str) => 
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const regex = new RegExp(normalizeString(licensePlate), 'i');

  const serviceSheets = await ServiceSheet.find({ active: true })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle', 'licensePlate');

  return serviceSheets.filter(serviceSheet =>
    serviceSheet.vehicle && regex.test(normalizeString(serviceSheet.vehicle.licensePlate))
  );
};

module.exports = getActiveServiceSheetsByVehicleCtrl;