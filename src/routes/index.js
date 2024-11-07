const { Router } = require('express');
const personClientRouter = require('./personClientRoutes.js');
const companyClientRouter = require('./companyClientRoutes.js');

const router = Router();

router.use('/personClient', personClientRouter);
router.use('/companyClient', companyClientRouter);

router.use('/', (req, res) => {res.send('MJ Server working')});


module.exports = router;