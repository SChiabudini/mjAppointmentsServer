const getActiveProcedureSheetsCtrl = require('../../controllers/procedureSheetCtrls/getActiveProcedureSheetsCtrl.js');

const getActiveProcedureSheetsHandler = async (req, res) => {

    try {
        const activeProcedureSheets = await getActiveProcedureSheetsCtrl();

        res.status(200).send(activeProcedureSheets);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getActiveProcedureSheetsHandler;