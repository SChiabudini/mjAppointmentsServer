require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const putMechanicalSheetStatusCtrl = async (_id) => {

    const mechanicalSheet = await MechanicalSheet.findById(_id);
    const newStatus = !mechanicalSheet.active;

    const updatedStatus = await MechanicalSheet.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putMechanicalSheetStatusCtrl;