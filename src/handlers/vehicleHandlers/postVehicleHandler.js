const postVehicleCtrl = require('../../controllers/vehicleCtrls/postVehicleCtrl.js');
const getVehiclesByLicensePlateCtrl = require('../../controllers/vehicleCtrls/getVehiclesByLicensePlateCtrl.js');

const postVehicleHandler = async (req, res) => {

    const { licensePlate, brand, model, year, engine, personClient, companyClient } = req.body;

    try {
        
        if(!licensePlate || !brand || !model || !year || !engine) {
            return res.status(400).send({ error: 'Missing data' });
        }

        if(typeof licensePlate !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - licensePlate' });
        }

        const existingVehicle = await getVehiclesByLicensePlateCtrl(licensePlate);
        if (existingVehicle[0]?.licensePlate === licensePlate) {
            return res.status(400).send({ error: 'Vehicle with this License Plate already exists' });
        }

        if(typeof brand !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - brand' });
        }

        if(typeof model !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - model' });
        }

        if(typeof year !== 'number'){
            return res.status(400).send({ error: 'Incorrect DataType - year' });
        }

        if(typeof engine !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - engine' });
        }

        const newVehicle = await postVehicleCtrl(licensePlate, brand, model, year, engine, personClient, companyClient);
        res.status(200).send(newVehicle);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postVehicleHandler;