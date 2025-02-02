require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getActiveMechanicalSheetsCtrl = async () => {
    const activeMechanicalSheets = await MechanicalSheet.find({ active: true })
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

    return activeMechanicalSheets;
};

module.exports = getActiveMechanicalSheetsCtrl;