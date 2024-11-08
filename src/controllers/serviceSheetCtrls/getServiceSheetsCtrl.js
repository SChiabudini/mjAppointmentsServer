require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getServiceSheetsCtrl = async () => {
    const serviceSheets = await ServiceSheet.find().populate('personClient').populate('companyClient').populate('vehicle');

    return serviceSheets;
};

module.exports = getServiceSheetsCtrl;