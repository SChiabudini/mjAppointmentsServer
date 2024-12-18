const getActiveServiceSheetsByNumberCtrl = require('../../controllers/serviceSheetCtrls/getActiveServiceSheetsByNumberCtrl.js');

const getActiveServiceSheetsByNumberHandler = async (req, res) => {
    const { number } = req.query;  

    try {
        const activeServiceSheetsByNumber = await getActiveServiceSheetsByNumberCtrl(number);

        if (!activeServiceSheetsByNumber) {
            return res.status(404).send(`No service sheet found with number: "${number}"`);
        }

        res.status(200).send(activeServiceSheetsByNumber);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveServiceSheetsByNumberHandler;