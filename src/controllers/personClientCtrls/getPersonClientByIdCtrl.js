require('../../db.js');
const PersonClient = require('../../collections/PersonClient.js');

const getPersonClientByIdCtrl = async (_id) => {

  if (_id) {
    const personClientById = await PersonClient.findOne({ _id })
    .populate({
      path: 'vehicles',  
      select: 'brand engine licensePlate model year'
    })
    .populate({
      path: 'serviceSheets',  
      select: 'date vehicle',  // Poblar la propiedad `vehicle` que es un ID
      populate: {  // Ahora poblamos la propiedad `vehicle` para que contenga los detalles completos del vehículo
        path: 'vehicle',
        select: 'licensePlate'  // Solo seleccionamos la patente (puedes agregar más propiedades si lo necesitas)
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

    return personClientById;
  };

};

module.exports = getPersonClientByIdCtrl;   