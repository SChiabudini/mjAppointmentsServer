const { Router } = require('express');

const router = Router();

router.use('/', (req, res) => {res.send('Server Indira Gold OK')});


module.exports = router;