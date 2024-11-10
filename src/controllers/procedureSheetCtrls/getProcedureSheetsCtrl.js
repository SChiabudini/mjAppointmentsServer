require('../../db.js');
const ProcedureSheet = require('../../collections/ProcedureSheet.js');

const getProcedureSheetsCtrl = async () => {
    const procedureSheets = await ProcedureSheet.find().populate('personClient').populate('companyClient').populate('vehicle');

    return procedureSheets;
};

module.exports = getProcedureSheetsCtrl;