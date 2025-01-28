const getActiveMechanicalSheetsByDateCtrl = require('../../controllers/mechanicalSheetCtrls/getActiveMechanicalSheetsByDateCtrl.js');

const getActiveMechanicalSheetsByDateHandler = async (req, res) => {
    const { start, end } = req.body;  

    try {
        const activeMechanicalSheetsByDate = await getActiveMechanicalSheetsByDateCtrl(start, end);

        if (!activeMechanicalSheetsByDate) {
            return res.status(404).send(`No mechanical sheet found between dates: ${start} - ${end}`);
        }

        res.status(200).send(activeMechanicalSheetsByDate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveMechanicalSheetsByDateHandler;