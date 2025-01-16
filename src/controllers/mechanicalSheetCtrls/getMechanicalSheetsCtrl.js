require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getMechanicalSheetsCtrl = async () => {

    const mechanicalSheets = await MechanicalSheet.find()
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

    return mechanicalSheets;
};

module.exports = getMechanicalSheetsCtrl;