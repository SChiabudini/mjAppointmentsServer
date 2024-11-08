const getServiceSheetsCtrl = require('../../controllers/serviceSheetCtrls/getServiceSheetsCtrl.js');

const getServiceSheetsHandler = async (req, res) => {

    try {
        const serviceSheets = await getServiceSheetsCtrl();

        res.status(200).send(serviceSheets);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getServiceSheetsHandler;