const getPersonClientByIdCtrl = require('../../controllers/personClientCtrls/getPersonClientByIdCtrl');

const getPersonClientByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const personClientByID = await getPersonClientByIdCtrl(id);

        if (!personClientByID) {
            return res.status(404).send(`No person client found with ID: "${id}"`);
        }

        res.status(200).send(personClientByID);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getPersonClientByIdHandler;