const putCompanyClientStatusCtrl = require('../../controllers/companyClientCtrls/putCompanyClientStatusCtrl.js');

const putCompanyClientStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const companyClientUpdate = await putCompanyClientStatusCtrl(id)
    
      return res.status(200).send(`The companyClient changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putCompanyClientStatusHandler;