require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getMechanicalSheetsByVehicleCtrl = async (licensePlate) => {

  const normalizeString = (str) => 
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const regex = new RegExp(normalizeString(licensePlate), 'i');

  const mechanicalSheets = await MechanicalSheet.find()
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle', 'licensePlate');

  return mechanicalSheets.filter(mechanicalSheet =>
    mechanicalSheet.vehicle && regex.test(normalizeString(mechanicalSheet.vehicle.licensePlate))
  );
};

module.exports = getMechanicalSheetsByVehicleCtrl;
