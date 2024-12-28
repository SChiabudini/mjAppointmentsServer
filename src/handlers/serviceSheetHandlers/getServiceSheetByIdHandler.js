const getServiceSheetByIdCtrl = require('../../controllers/serviceSheetCtrls/getServiceSheetByIdCtrl.js');

const getServiceSheetByIdHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const serviceSheetById = await getServiceSheetByIdCtrl(id);

        if(!serviceSheetById){
            return res.status(404).send(`No service sheet found with ID: "${id}"`);
        };

        res.status(200).send(serviceSheetById);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getServiceSheetByIdHandler;