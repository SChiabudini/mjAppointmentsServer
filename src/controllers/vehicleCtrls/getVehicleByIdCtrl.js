require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const getVehicleByIdCtrl = async (_id) => {

    if(_id) {
        const vehicleById = await Vehicle.findOne({ _id })
        .populate('personClient')
        .populate('companyClient');
        return vehicleById;
    }

};

module.exports = getVehicleByIdCtrl;