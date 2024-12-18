const getActiveMechanicalSheetsByClientCtrl = require('../../controllers/mechanicalSheetCtrls/getActiveMechanicalSheetsByClientCtrl.js');

const getActiveMechanicalSheetsByClientHandler = async (req, res) => {
    const { client } = req.query;  

    try {
        const activeMechanicalSheetsByClient = await getActiveMechanicalSheetsByClientCtrl(client);

        if (!activeMechanicalSheetsByClient) {
            return res.status(404).send(`No mechanical sheet found with client: "${client}"`);
        }

        res.status(200).send(activeMechanicalSheetsByClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveMechanicalSheetsByClientHandler;