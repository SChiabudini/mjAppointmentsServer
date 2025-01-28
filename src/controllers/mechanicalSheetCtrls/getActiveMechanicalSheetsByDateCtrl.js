require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getActiveMechanicalSheetsByDateCtrl = async (start, end) => {

    const startDate = new Date(`${start}T00:00:00.000Z`);
    const endDate = new Date(`${end}T23:59:59.999Z`);

    const activeMechanicalSheets = await MechanicalSheet.find({
        active: true,
        date: { $gte: startDate, $lte: endDate },
    })
        .populate('personClient')
        .populate('companyClient')
        .populate('vehicle');

    return activeMechanicalSheets;
};

module.exports = getActiveMechanicalSheetsByDateCtrl;