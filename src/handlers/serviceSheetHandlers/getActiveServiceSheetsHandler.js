const getActiveServiceSheetsCtrl = require('../../controllers/serviceSheetCtrls/getActiveServiceSheetsCtrl.js');

const getActiveServiceSheetsHandler = async (req, res) => {

    try {
        const activeServiceSheets = await getActiveServiceSheetsCtrl();

        res.status(200).send(activeServiceSheets);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getActiveServiceSheetsHandler;