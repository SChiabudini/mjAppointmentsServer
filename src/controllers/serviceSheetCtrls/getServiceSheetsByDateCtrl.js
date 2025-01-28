require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getServiceSheetsByDateCtrl = async (start, end) => {
    
    const startDate = new Date(`${start}T00:00:00.000Z`);
    const endDate = new Date(`${end}T23:59:59.999Z`);

    const serviceSheets = await ServiceSheet.find({
        date: { $gte: startDate, $lte: endDate },
    })
        .populate('personClient')
        .populate('companyClient')
        .populate('vehicle');

    return serviceSheets;
};

module.exports = getServiceSheetsByDateCtrl;