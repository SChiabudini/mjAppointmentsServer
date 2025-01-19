require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getCompanyClientByIdCtrl = async (_id) => {

  if (_id) {
      const companyClientById = await CompanyClient.findOne({ _id })
      .populate('mechanicalSheets')
      .populate('serviceSheets')
      .populate('vehicles');
  
      return companyClientById;
    };
};

module.exports = getCompanyClientByIdCtrl;   