const getActiveServiceSheetsByClientCtrl = require('../../controllers/serviceSheetCtrls/getActiveServiceSheetsByClientCtrl.js');

const getActiveServiceSheetsByClientHandler = async (req, res) => {
    const { client } = req.query;  

    try {
        const activeServiceSheetsByClient = await getActiveServiceSheetsByClientCtrl(client);

        if (!activeServiceSheetsByClient) {
            return res.status(404).send(`No service sheet found with client: "${client}"`);
        }

        res.status(200).send(activeServiceSheetsByClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActiveServiceSheetsByClientHandler;