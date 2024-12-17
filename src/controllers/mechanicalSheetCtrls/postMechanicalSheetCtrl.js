const MechanicalSheet = require('../../collections/MechanicalSheet.js');
const putPersonClientAddMechanicalSheetCtrl = require('../personClientCtrls/putPersonClientAddMechanicalSheetCtrl.js');
const putCompanyClientAddMechanicalSheetCtrl = require('../companyClientCtrls/putCompanyClientAddMechanicalSheetCtrl.js');
const putVehicleAddMechanicalSheetCtrl = require('../vehicleCtrls/putVehicleAddMechanicalSheetCtrl.js');

const postMechanicalSheetCtrl = async (personClient, companyClient, vehicle, kilometers, keyWords, description, amount) => {

    const newMechanicalSheet = {
        personClient,
        companyClient,
        vehicle,
        kilometers,
        keyWords,
        description,
        amount
    };

    const createdMechanicalSheet = await MechanicalSheet.create(newMechanicalSheet);

    if(personClient){
        await putPersonClientAddMechanicalSheetCtrl(personClient, createdMechanicalSheet._id);
    }

    if(companyClient){
        await putCompanyClientAddMechanicalSheetCtrl(companyClient, createdMechanicalSheet._id);
    }
    
    await putVehicleAddMechanicalSheetCtrl(vehicle, createdMechanicalSheet._id);

    return createdMechanicalSheet;
};

module.exports = postMechanicalSheetCtrl;