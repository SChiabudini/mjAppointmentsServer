require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getMechanicalSheetsByNumberCtrl = async (number) => {

  const regex = new RegExp(`.*${number}.*`, 'i');

  if (number) {
    const activeMechanicalSheets = await MechanicalSheet.find({ number: regex })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return activeMechanicalSheets;
  };
};

module.exports = getMechanicalSheetsByNumberCtrl; 