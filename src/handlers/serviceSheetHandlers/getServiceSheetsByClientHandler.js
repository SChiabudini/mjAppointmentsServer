const getServiceSheetsByClientCtrl = require('../../controllers/serviceSheetCtrls/getServiceSheetsByClientCtrl.js');

const getServiceSheetsByClientHandler = async (req, res) => {
    const { client } = req.query;  

    try {
        const serviceSheetsByClient = await getServiceSheetsByClientCtrl(client);

        if (!serviceSheetsByClient) {
            return res.status(404).send(`No service sheet found with client: "${client}"`);
        }

        res.status(200).send(serviceSheetsByClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getServiceSheetsByClientHandler;