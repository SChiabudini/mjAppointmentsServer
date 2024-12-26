require('../../db.js');
const Vehicle = require('../../collections/Vehicle.js');

const getVehicleByIdCtrl = async (_id) => {

    if(_id) {
        const vehicleById = await Vehicle.findOne({ _id })
        .populate({
            path: 'personClient',  
            select: 'dni name email phones cuilCuit'
        })
        .populate({
            path: 'companyClient',  
            select: 'cuit name email phones address'
        })
        .populate({
            path: 'serviceSheets',  
            select: 'date kilometers kmsToNextService oil filters notes amount number'
        })
        .populate({
            path: 'mechanicalSheets',  
            select: 'date kilometers keyWords description amount number'
        });

        return vehicleById;
    }

};

module.exports = getVehicleByIdCtrl;