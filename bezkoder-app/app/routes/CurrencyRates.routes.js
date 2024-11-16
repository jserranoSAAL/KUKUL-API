module.exports = (app) => {
    const currencyRates = require('../controllers/CurrencyRates.controller.js');
    const requireAuth = require('../middlewares/auth').requireAuth; // Asegúrate de que la ruta del middleware es correcta

    const router = require('express').Router();

    // Crear o actualizar una tasa de cambio
    router.post('/upsert', requireAuth, currencyRates.upsertRate);

    // Obtener todas las tasas de cambio
    router.get('/', requireAuth, currencyRates.findAllRates);

    // Obtener equivalencia entre dos monedas por sus IDs
    router.get('/equivalence/:from_currency_id/:to_currency_id', requireAuth, currencyRates.getEquivalence);

    app.use('/api/currencyRates', router);
};
