const getMechanicalSheetByIdCtrl = require('../../controllers/mechanicalSheetCtrls/getMechanicalSheetByIdCtrl.js');

const getMechanicalSheetByIdHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const mechanicalSheetById = await getMechanicalSheetByIdCtrl(id);

        if(!mechanicalSheetById){
            return res.status(404).send(`No mechanical sheet found with ID: "${id}"`);
        };

        res.status(200).send(mechanicalSheetById);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getMechanicalSheetByIdHandler;