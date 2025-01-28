const getServiceSheetsByDateCtrl = require('../../controllers/serviceSheetCtrls/getServiceSheetsByDateCtrl.js');

const getServiceSheetsByDateHandler = async (req, res) => {
    const { start, end } = req.query;  

    try {
        const serviceSheetsByDate = await getServiceSheetsByDateCtrl(start, end);

        if (!serviceSheetsByDate) {
            return res.status(404).send(`No service sheet found between dates: ${start} - ${end}`);
        }

        res.status(200).send(serviceSheetsByDate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getServiceSheetsByDateHandler;