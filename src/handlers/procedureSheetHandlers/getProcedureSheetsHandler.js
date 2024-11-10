const getProcedureSheetsCtrl = require('../../controllers/procedureSheetCtrls/getProcedureSheetsCtrl.js');

const getProcedureSheetsHandler = async (req, res) => {

    try {
        const procedureSheets = await getProcedureSheetsCtrl();

        res.status(200).send(procedureSheets);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getProcedureSheetsHandler;