const putMechanicalSheetStatusCtrl = require('../../controllers/mechanicalSheetCtrls/putMechanicalSheetStatusCtrl.js');

const putMechanicalSheetStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const mechanicalSheetUpdate = await putMechanicalSheetStatusCtrl(id)
    
      return res.status(200).send(`The mechanicalSheet changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putMechanicalSheetStatusHandler;