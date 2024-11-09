const ProcedureSheet = require('../../collections/ProcedureSheet.js');
const putPersonClientAddProcedureSheetCtrl = require('../personClientCtrls/putPersonClientAddProcedureSheetCtrl.js');
const putCompanyClientAddProcedureSheetCtrl = require('../companyClientCtrls/putCompanyClientAddProcedureSheetCtrl.js');
const putVehicleAddProcedureSheetCtrl = require('../vehicleCtrls/putVehicleAddProcedureSheetCtrl.js');

const postProcedureSheetCtrl = async (personClient, companyClient, vehicle, kilometers, keyWords, description, amount) => {

    const newProcedureSheet = {
        personClient,
        companyClient,
        vehicle,
        kilometers,
        keyWords,
        description,
        amount
    };

    const createdProcedureSheet = await ProcedureSheet.create(newProcedureSheet);

    if(personClient){
        await putPersonClientAddProcedureSheetCtrl(personClient, createdProcedureSheet._id);
    }

    if(companyClient){
        await putCompanyClientAddProcedureSheetCtrl(companyClient, createdProcedureSheet._id);
    }
    
    await putVehicleAddProcedureSheetCtrl(vehicle, createdProcedureSheet._id);

    return createdProcedureSheet;
};

module.exports = postProcedureSheetCtrl;