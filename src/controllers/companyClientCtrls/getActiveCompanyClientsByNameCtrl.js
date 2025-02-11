require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getActiveCompanyClientsByNameCtrl = async (name) => {
  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  if (name) {
    const normalizedName = normalize(name);
    const regex = new RegExp(`.*${normalizedName}.*`, 'i');

    const activeCompanyClients = await CompanyClient.find({
      active: true,
      $or: [{ normalizedName: regex }, { name: regex }] // Busca en ambos campos
    })
      .populate('vehicles')
      .populate('serviceSheets')
      .populate('mechanicalSheets');

    return activeCompanyClients;
  }
};

module.exports = getActiveCompanyClientsByNameCtrl;
