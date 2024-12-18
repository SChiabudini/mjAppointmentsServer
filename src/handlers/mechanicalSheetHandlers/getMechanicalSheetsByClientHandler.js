const getMechanicalSheetsByClientCtrl = require('../../controllers/mechanicalSheetCtrls/getMechanicalSheetsByClientCtrl.js');

const getMechanicalSheetsByClientHandler = async (req, res) => {
    const { client } = req.query;  

    try {
        const mechanicalSheetsByClient = await getMechanicalSheetsByClientCtrl(client);

        if (!mechanicalSheetsByClient) {
            return res.status(404).send(`No mechanical sheet found with client: "${client}"`);
        }

        res.status(200).send(mechanicalSheetsByClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getMechanicalSheetsByClientHandler;