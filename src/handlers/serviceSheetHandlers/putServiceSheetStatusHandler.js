const putServiceSheetStatusCtrl = require('../../controllers/serviceSheetCtrls/putServiceSheetStatusCtrl.js');

const putServiceSheetStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const serviceSheetUpdate = await putServiceSheetStatusCtrl(id)
    
      return res.status(200).send(`The serviceSheet changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putServiceSheetStatusHandler;