const { Router } = require('express');

const router = Router();

// Ruta de prueba
router.get('/', (req, res) => {
    res.json({ message: '¡Todo funcionando!' });
});

module.exports = router;