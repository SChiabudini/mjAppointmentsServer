require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getServiceSheetsByNumberCtrl = async (number) => {

  const regex = new RegExp(`.*${number}.*`, 'i');

  if (number) {
    const serviceSheets = await ServiceSheet.find({ number: regex })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return serviceSheets;
  };
};

module.exports = getServiceSheetsByNumberCtrl; 