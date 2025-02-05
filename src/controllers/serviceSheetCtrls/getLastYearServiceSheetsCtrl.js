require('../../db.js');
const ServiceSheet = require('../../collections/ServiceSheet.js');

const getLastYearServiceSheetsCtrl = async (date) => {
    try {
        if (!date) {
            throw new Error('A valid date must be provided');
        }

        const inputDate = new Date(date);
        
        // Calcula la fecha del mismo día pero un año atrás
        const lastYearDate = new Date(inputDate);
        lastYearDate.setFullYear(inputDate.getFullYear() - 1);

        // Establece el inicio y el fin del día para el año anterior
        const lastYearStart = new Date(lastYearDate);
        lastYearStart.setHours(0, 0, 0, 0); // Inicio del día

        const lastYearEnd = new Date(lastYearDate);
        lastYearEnd.setHours(23, 59, 59, 999); // Fin del día

        const sheets = await ServiceSheet.find({
            date: {
                $gte: lastYearStart.toISOString(),
                $lte: lastYearEnd.toISOString(),
            },
        })
        .populate('vehicle')
        .populate('personClient')
        .populate('companyClient');

        return sheets;
    } catch (error) {
        console.error('Error getting last year service sheets:', error.message);
        throw error;
    }
};

module.exports = getLastYearServiceSheetsCtrl;