const getMechanicalSheetsByKeyWordsCtrl = require('../../controllers/mechanicalSheetCtrls/getMechanicalSheetsByKeyWordsCtrl.js');

const getMechanicalSheetsByKeyWordsHandler = async (req, res) => {
    const { keyWords } = req.query;  

    try {
        const mechanicalSheetsByKeyWords = await getMechanicalSheetsByKeyWordsCtrl(keyWords);

        if (!mechanicalSheetsByKeyWords) {
            return res.status(404).send(`No mechanical sheet found with keyWords: "${keyWords}"`);
        }

        res.status(200).send(mechanicalSheetsByKeyWords);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getMechanicalSheetsByKeyWordsHandler;