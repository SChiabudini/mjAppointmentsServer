require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getActiveServiceSheetsCtrl = async () => {
    const activeServiceSheets = await ServiceSheet.find({ active: true })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return activeServiceSheets;
};

module.exports = getActiveServiceSheetsCtrl;