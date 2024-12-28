require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getActiveServiceSheetsCtrl = async () => {
    
    const activeServiceSheets = await ServiceSheet.find({ active: true })
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

    return activeServiceSheets;
};

module.exports = getActiveServiceSheetsCtrl;