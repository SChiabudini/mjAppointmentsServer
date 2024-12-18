const getMechanicalSheetsByNumberCtrl = require('../../controllers/mechanicalSheetCtrls/getMechanicalSheetsByNumberCtrl.js');

const getMechanicalSheetsByNumberHandler = async (req, res) => {
    const { number } = req.query;  

    try {
        const mechanicalSheetsByNumber = await getMechanicalSheetsByNumberCtrl(number);

        if (!mechanicalSheetsByNumber) {
            return res.status(404).send(`No mechanical sheet found with number: "${number}"`);
        }

        res.status(200).send(mechanicalSheetsByNumber);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getMechanicalSheetsByNumberHandler;