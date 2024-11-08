const ServiceSheet = require('../../collections/ServiceSheet.js');

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

    return createdServiceSheet;
};

module.exports = postServiceSheetCtrl;