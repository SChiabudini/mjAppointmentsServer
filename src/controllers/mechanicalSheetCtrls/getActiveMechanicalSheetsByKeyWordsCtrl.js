require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getActiveMechanicalSheetsByKeyWordsCtrl = async (keyWord) => {

  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  if (keyWord) {

    const normalizedKeyWord = normalize(keyWord);
    const regex = new RegExp(`.*${normalizedKeyWord}.*`, 'i');

    const activeMechanicalSheets = await MechanicalSheet.find({ $or: [{ normalizedKeyWords: regex }, { keyWords: regex }], active: true })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');
    
    return activeMechanicalSheets;
  };
};

module.exports = getActiveMechanicalSheetsByKeyWordsCtrl; 