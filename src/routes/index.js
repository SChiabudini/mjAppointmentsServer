const { Router } = require('express');
const personClientRouter = require('./personClientRoutes.js');
const companyClientRouter = require('./companyClientRoutes.js');
const vehicleRouter = require('./vehicleRoutes.js');
const serviceSheetRouter = require('./serviceSheetRoutes.js');
const procedureSheetRouter = require('./procedureSheetRoutes.js');

const router = Router();

router.use('/personClient', personClientRouter);
router.use('/companyClient', companyClientRouter);
router.use('/vehicle', vehicleRouter);
router.use('/serviceSheet', serviceSheetRouter);
router.use('/procedureSheet', procedureSheetRouter);

router.use('/', (req, res) => {res.send('MJ Server working')});


module.exports = router;