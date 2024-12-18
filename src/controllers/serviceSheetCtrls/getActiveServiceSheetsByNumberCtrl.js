require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getActiveServiceSheetsByNumberCtrl = async (number) => {

  const regex = new RegExp(`.*${number}.*`, 'i');

  if (number) {
    const activeServiceSheets = await ServiceSheet.find({ number: regex, active: true })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return activeServiceSheets;
  };
};

module.exports = getActiveServiceSheetsByNumberCtrl; 