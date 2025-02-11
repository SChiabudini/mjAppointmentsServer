const putVehicleCtrl = require('../../controllers/vehicleCtrls/putVehicleCtrl.js');

const putVehicleHandler = async (req, res) => {

    const { _id, licensePlate, brand, model, year, engine, personClient, companyClient } = req.body;

    try {

        if(typeof licensePlate !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - licensePlate' });
        }

        if(typeof brand !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - brand' });
        }

        if(typeof model !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - model' });
        }

        if(year && typeof year !== 'number' || isNaN(year)){
            return res.status(400).send({ error: 'Incorrect DataType - year' });
        }

        if(typeof engine !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType - engine' });
        }

        const editVehicle = await putVehicleCtrl(_id, licensePlate, brand, model, year, engine, personClient, companyClient);

        res.status(200).send(editVehicle);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = putVehicleHandler;