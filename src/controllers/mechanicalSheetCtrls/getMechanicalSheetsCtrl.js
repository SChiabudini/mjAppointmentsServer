require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getMechanicalSheetsCtrl = async () => {
    const mechanicalSheets = await MechanicalSheet.find().populate('personClient').populate('companyClient').populate('vehicle');

    return mechanicalSheets;
};

module.exports = getMechanicalSheetsCtrl;