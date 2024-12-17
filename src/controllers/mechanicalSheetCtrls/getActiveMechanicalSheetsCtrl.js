require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getActiveMechanicalSheetsCtrl = async () => {
    const activeMechanicalSheets = await MechanicalSheet.find({ active: true })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return activeMechanicalSheets;
};

module.exports = getActiveMechanicalSheetsCtrl;