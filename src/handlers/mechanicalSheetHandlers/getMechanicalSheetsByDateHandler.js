const getMechanicalSheetsByDateCtrl = require('../../controllers/mechanicalSheetCtrls/getMechanicalSheetsByDateCtrl.js');

const getMechanicalSheetsByDateHandler = async (req, res) => {
    const { start, end } = req.body;  

    try {
        const mechanicalSheetsByDate = await getMechanicalSheetsByDateCtrl(start, end);

        if (!mechanicalSheetsByDate) {
            return res.status(404).send(`No mechanical sheet found between dates: ${start} - ${end}`);
        }

        res.status(200).send(mechanicalSheetsByDate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getMechanicalSheetsByDateHandler;