require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getActiveServiceSheetsByDateCtrl = async (start, end) => {

    const startDate = new Date(`${start}T00:00:00.000Z`);
    const endDate = new Date(`${end}T23:59:59.999Z`);

    const activeServiceSheets = await ServiceSheet.find({
        active: true,
        date: { $gte: startDate, $lte: endDate },
    })
        .populate('personClient')
        .populate('companyClient')
        .populate('vehicle');

    return activeServiceSheets;
};

module.exports = getActiveServiceSheetsByDateCtrl;