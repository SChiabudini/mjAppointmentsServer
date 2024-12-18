require('../../db.js');
const MechanicalSheet = require('../../collections/MechanicalSheet.js');

const getMechanicalSheetsByKeyWordsCtrl = async (keyWord) => {

  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  if (keyWord) {

    const normalizedKeyWord = normalize(keyWord);
    const regex = new RegExp(`.*${normalizedKeyWord}.*`, 'i');

    const mechanicalSheets = await MechanicalSheet.find({ keyWords: regex })
    .populate('personClient')
    .populate('companyClient')
    .populate('vehicle');
    
    return mechanicalSheets;
  };
};

module.exports = getMechanicalSheetsByKeyWordsCtrl; 