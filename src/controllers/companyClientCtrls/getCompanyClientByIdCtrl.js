require('../../db.js');
const CompanyClient = require('../../collections/CompanyClient.js');

const getCompanyClientByIdCtrl = async (_id) => {

  if (_id) {
      const companyClientById = await CompanyClient.findOne({ _id })
      .populate({
        path: 'vehicles',  
        select: 'brand engine licensePlate model year'
      })
      .populate({
        path: 'serviceSheets',  
        select: 'date vehicle',  
        populate: {  
          path: 'vehicle',
          select: 'licensePlate'  
        }
      })
      .populate({
        path: 'mechanicalSheets',  
        select: 'date vehicle',
        populate: {
          path: 'vehicle',
          select: 'licensePlate'
        }
      });
  
      return companyClientById;
    };
};

module.exports = getCompanyClientByIdCtrl;   