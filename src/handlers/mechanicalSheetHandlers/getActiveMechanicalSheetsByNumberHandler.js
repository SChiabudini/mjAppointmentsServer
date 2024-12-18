const getActiveMechanicalSheetsByNumberCtrl = require('../../controllers/mechanicalSheetCtrls/getActiveMechanicalSheetsByNumberCtrl.js');

const getActiveMechanicalSheetsByNumberHandler = async (req, res) => {
    const { number } = req.query;  

    try {
        const activeMechanicalSheetsByNumber = await getActiveMechanicalSheetsByNumberCtrl(number);

        if (!activeMechanicalSheetsByNumber) {
            return res.status(404).send(`No mechanical sheet found with number: "${number}"`);
        }

        res.status(200).send(activeMechanicalSheetsByNumber);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveMechanicalSheetsByNumberHandler;