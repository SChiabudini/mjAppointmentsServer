const { Router } = require('express');

const router = Router();

router.use('/', (req, res) => {res.send('MJ Server working')});


module.exports = router;