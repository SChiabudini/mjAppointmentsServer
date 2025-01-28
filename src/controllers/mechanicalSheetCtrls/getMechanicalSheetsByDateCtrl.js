require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getMechanicalSheetsByDateCtrl = async (start, end) => {

    const startDate = new Date(`${start}T00:00:00.000Z`);
    const endDate = new Date(`${end}T23:59:59.999Z`);

    const mechanicalSheets = await MechanicalSheet.find({
        date: { $gte: startDate, $lte: endDate },
    })
        .populate('personClient')
        .populate('companyClient')
        .populate('vehicle');

    return mechanicalSheets;
};

module.exports = getMechanicalSheetsByDateCtrl;