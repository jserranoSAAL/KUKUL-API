// controllers/currency.controller.js
const db = require('../models');
const Currency = db.Currency;

// Create and Save a new Currency
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.abbreviation) {
    res.status(400).send({
      message: "Abbreviation can not be empty!"
    });
    return;
  }

  // Create a Currency
  const currency = {
    currency_name: req.body.currency_name,
    abbreviation: req.body.abbreviation,
    is_default: req.body.is_default,
    customer_exchange_rate: req.body.customer_exchange_rate,
    supplier_exchange_rate: req.body.supplier_exchange_rate,
    last_update: req.body.last_update || new Date()
  };

  // Save Currency in the database
  try {
    const data = await Currency.create(currency);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Currency."
    });
  }
};

// Retrieve all Currencies from the database.
exports.findAll = (req, res) => {
  Currency.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving currencies."
      });
    });
};

// Find a single Currency with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Currency.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Currency with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Currency with id=" + id
      });
    });
};

// Update a Currency by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Currency.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Currency was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Currency with id=${id}. Maybe Currency was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Currency with id=" + id
      });
    });
};

// Delete a Currency with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Currency.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Currency was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Currency with id=${id}. Maybe Currency was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Currency with id=" + id
      });
    });
};

// Set a default Currency
exports.setDefault = async (req, res) => {
  const id = req.params.id;

  try {
    await Currency.update({ is_default: false }, { where: {} }); // Reset default
    const num = await Currency.update({ is_default: true }, { where: { id: id } });

    if (num == 1) {
      res.send({
        message: "Currency was set as default successfully."
      });
    } else {
      res.send({
        message: `Cannot set Currency as default with id=${id}. Maybe Currency was not found!`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error setting default Currency with id=" + id
    });
  }
};
