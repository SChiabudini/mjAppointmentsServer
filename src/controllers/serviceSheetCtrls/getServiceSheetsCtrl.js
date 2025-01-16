require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getServiceSheetsCtrl = async () => {
    const serviceSheets = await ServiceSheet.find()
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

    return serviceSheets;
};

module.exports = getServiceSheetsCtrl;