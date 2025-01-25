require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const putServiceSheetStatusCtrl = async (_id) => {

    const serviceSheet = await ServiceSheet.findById(_id);
    const newStatus = !serviceSheet.active;

    const updatedStatus = await ServiceSheet.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putServiceSheetStatusCtrl;