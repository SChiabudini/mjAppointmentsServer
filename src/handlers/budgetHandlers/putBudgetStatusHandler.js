const putBudgetStatusCtrl = require('../../controllers/budgetCtrls/putBudgetStatusCtrl.js');

const putBudgetStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const budgetUpdate = await putBudgetStatusCtrl(id)
    
      return res.status(200).send(`The budget changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putBudgetStatusHandler;