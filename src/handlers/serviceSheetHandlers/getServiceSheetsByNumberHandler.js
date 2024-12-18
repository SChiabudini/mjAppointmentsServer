const getServiceSheetsByNumberCtrl = require('../../controllers/serviceSheetCtrls/getServiceSheetsByNumberCtrl.js');

const getServiceSheetsByNumberHandler = async (req, res) => {
    const { number } = req.query;  

    try {
        const serviceSheetsByNumber = await getServiceSheetsByNumberCtrl(number);

        if (!serviceSheetsByNumber) {
            return res.status(404).send(`No service sheet found with number: "${number}"`);
        }

        res.status(200).send(serviceSheetsByNumber);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getServiceSheetsByNumberHandler;