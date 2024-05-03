// routes/currencyRoutes.js
module.exports = app => {
    const currencies = require('../controllers/currency.controller.js');
    const requireAuth = require('../middlewares/auth').requireAuth; // Asegúrate de que la ruta del middleware es correcta
  
    var router = require('express').Router();
  
    // Create a new Currency - Protected
    router.post('/', requireAuth, currencies.create);
  
    // Retrieve all Currencies - Protected
    router.get('/', requireAuth, currencies.findAll);
  
    // Retrieve a single Currency with id - Protected
    router.get('/:id', requireAuth, currencies.findOne);
  
    // Update a Currency with id - Protected
    router.put('/:id', requireAuth, currencies.update);
  
    // Delete a Currency with id - Protected
    router.delete('/:id', requireAuth, currencies.delete);
  
    // Set default Currency - Protected
    router.patch('/set-default/:id', requireAuth, currencies.setDefault);
  
    app.use('/api/currencies', router);
};
