require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const putPersonClientStatusCtrl = async (_id) => {

    const personClient = await PersonClient.findById(_id);
    const newStatus = !personClient.active;

    const updatedStatus = await PersonClient.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putPersonClientStatusCtrl;