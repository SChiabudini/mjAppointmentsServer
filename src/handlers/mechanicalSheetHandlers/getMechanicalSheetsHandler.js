const getMechanicalSheetsCtrl = require('../../controllers/mechanicalSheetCtrls/getMechanicalSheetsCtrl.js');

const getMechanicalSheetsHandler = async (req, res) => {

    try {
        const mechanicalSheets = await getMechanicalSheetsCtrl();

        res.status(200).send(mechanicalSheets);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getMechanicalSheetsHandler;