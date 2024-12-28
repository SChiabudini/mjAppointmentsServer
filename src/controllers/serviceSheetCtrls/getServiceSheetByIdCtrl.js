require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getServiceByIdSheetCtrl = async (_id) => {

    if(_id){
        const serviceSheetById = await ServiceSheet.findOne({ _id })
        .populate({
            path: 'personClient',  
            select: 'dni name email phones cuilCuit'
        })
        .populate({
            path: 'companyClient',  
            select: 'cuit name email phones address'
        })
        .populate({
            path: 'vehicle',  
            select: 'licensePlate brand model year engine'
        });

        return serviceSheetById;
    };
};

module.exports = getServiceByIdSheetCtrl;