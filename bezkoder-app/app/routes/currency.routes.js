// routes/currencyRoutes.js
module.exports = app => {
    const currencies = require('../controllers/currency.controller.js');
  
    var router = require('express').Router();
  
    // Create a new Currency
    router.post('/', currencies.create);
  
    // Retrieve all Currencies
    router.get('/', currencies.findAll);
  
    // Retrieve a single Currency with id
    router.get('/:id', currencies.findOne);
  
    // Update a Currency with id
    router.put('/:id', currencies.update);
  
    // Delete a Currency with id
    router.delete('/:id', currencies.delete);
  
    // Set default Currency
    router.patch('/set-default/:id', currencies.setDefault);
  
    app.use('/api/currencies', router);
  };
  