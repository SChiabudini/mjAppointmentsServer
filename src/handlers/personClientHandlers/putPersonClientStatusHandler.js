const putPersonClientStatusCtrl = require('../../controllers/personClientCtrls/putPersonClientStatusCtrl.js');

const putPersonClientStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const personClientUpdate = await putPersonClientStatusCtrl(id)
    
      return res.status(200).send(`The personClient changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putPersonClientStatusHandler;