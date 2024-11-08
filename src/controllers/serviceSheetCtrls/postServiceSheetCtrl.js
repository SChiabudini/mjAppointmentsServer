const ServiceSheet = require('../../collections/ServiceSheet.js');
const putPersonClientAddServiceSheetCtrl = require('../personClientCtrls/putPersonClientAddServiceSheetCtrl.js');
const putCompanyClientAddServiceSheetCtrl = require('../personClientCtrls/putPersonClientAddServiceSheetCtrl.js');
const putVehicleAddServiceSheetCtrl = require('../vehicleCtrls/putVehicleAddServiceSheetCtrl.js');

const postServiceSheetCtrl = async (personClient, companyClient, vehicle, kilometers, kmsToNextService, oil, filters, notes, amount) => {

    const newServiceSheet = {
        personClient,
        companyClient,
        vehicle,
        kilometers,
        kmsToNextService,
        oil,
        filters,
        notes,
        amount
    };

    const createdServiceSheet = await ServiceSheet.create(newServiceSheet);

    if(personClient){
        await putPersonClientAddServiceSheetCtrl(personClient, createdServiceSheet._id);
    }

    if(companyClient){
        await putCompanyClientAddServiceSheetCtrl(companyClient, createdServiceSheet._id);
    }
    
    await putVehicleAddServiceSheetCtrl(vehicle, createdServiceSheet._id);

    return createdServiceSheet;
};

module.exports = postServiceSheetCtrl;