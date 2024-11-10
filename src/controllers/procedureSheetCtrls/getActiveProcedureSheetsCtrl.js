require('../../db.js');
const ProcedureSheet = require('../../collections/ProcedureSheet.js');

const getActiveProcedureSheetsCtrl = async () => {
    const activeProcedureSheets = await ProcedureSheet.find({ active: true })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');

    return activeProcedureSheets;
};

module.exports = getActiveProcedureSheetsCtrl;