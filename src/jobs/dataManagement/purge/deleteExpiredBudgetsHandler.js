const deleteExpiredBudgetsCtrl = require('../../../controllers/budgetCtrls/deleteExpiredBudgetsCtrl.js');

const deleteExpiredBudgetsHandler = async () => {

    try {

        const today = new Date().toISOString();

        const expiredBudgets = await deleteExpiredBudgetsCtrl(today);

        console.log(`${expiredBudgets} budgets have been deleted.`);
    } catch (error) {
        console.error('Error deleting expired budgets:', error);
        throw error;
    }
};

module.exports = deleteExpiredBudgetsHandler;