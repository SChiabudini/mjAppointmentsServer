const getActiveMechanicalSheetsCtrl = require('../../controllers/mechanicalSheetCtrls/getActiveMechanicalSheetsCtrl.js');

const getActiveMechanicalSheetsHandler = async (req, res) => {

    try {
        const activeMechanicalSheets = await getActiveMechanicalSheetsCtrl();

        res.status(200).send(activeMechanicalSheets);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getActiveMechanicalSheetsHandler;