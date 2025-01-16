require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getMechanicalSheetByIdCtrl = async (_id) => {

    if(_id){
        const mechanicalSheet = await MechanicalSheet.findOne({ _id })
        .populate({
            path: 'personClient',  
            select: 'dni name email phones phoneWsp cuilCuit'
        })
        .populate({
            path: 'companyClient',  
            select: 'cuit name email phones phoneWsp address'
        })
        .populate({
            path: 'vehicle',  
            select: 'licensePlate brand model year engine'
        });
    
        return mechanicalSheet;
    };
};

module.exports = getMechanicalSheetByIdCtrl;