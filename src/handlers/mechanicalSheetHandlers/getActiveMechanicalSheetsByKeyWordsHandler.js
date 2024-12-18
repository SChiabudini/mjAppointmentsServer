const getActiveMechanicalSheetsByKeyWordsCtrl = require('../../controllers/mechanicalSheetCtrls/getActiveMechanicalSheetsByKeyWordsCtrl.js');

const getActiveMechanicalSheetsByKeyWordsHandler = async (req, res) => {
    const { keyWords } = req.query;  

    try {
        const activeMechanicalSheetsByKeyWords = await getActiveMechanicalSheetsByKeyWordsCtrl(keyWords);

        if (!activeMechanicalSheetsByKeyWords) {
            return res.status(404).send(`No mechanical sheet found with keyWords: "${keyWords}"`);
        }

        res.status(200).send(activeMechanicalSheetsByKeyWords);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveMechanicalSheetsByKeyWordsHandler;