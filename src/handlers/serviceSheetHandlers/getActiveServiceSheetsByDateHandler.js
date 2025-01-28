const getActiveServiceSheetsByDateCtrl = require('../../controllers/serviceSheetCtrls/getActiveServiceSheetsByDateCtrl.js');

const getActiveServiceSheetsByDateHandler = async (req, res) => {
    const { start, end } = req.body;  

    try {
        const activeServiceSheetsByDate = await getActiveServiceSheetsByDateCtrl(start, end);

        if (!activeServiceSheetsByDate) {
            return res.status(404).send(`No service sheet found between dates: ${start} - ${end}`);
        }

        res.status(200).send(activeServiceSheetsByDate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveServiceSheetsByDateHandler;