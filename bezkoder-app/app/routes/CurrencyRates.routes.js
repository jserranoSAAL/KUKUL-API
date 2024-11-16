module.exports = (app) => {
    const currencyRates = require('../controllers/CurrencyRates.controller.js');
    const requireAuth = require('../middlewares/auth').requireAuth; // Asegúrate de que la ruta del middleware es correcta
  
    const router = require('express').Router();
  
    // Crear o actualizar una tasa de cambio
    router.post('/upsert', requireAuth, currencyRates.upsertRate);
  
    // Obtener todas las tasas de cambio
    router.get('/', requireAuth, currencyRates.findAllRates);
  
    app.use('/api/currencyRates', router);
  };
  