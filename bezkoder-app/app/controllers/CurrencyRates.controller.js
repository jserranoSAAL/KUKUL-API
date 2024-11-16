const db = require('../models');
const CurrencyRates = db.CurrencyRates;

// Crear o actualizar una tasa de cambio
exports.upsertRate = async (req, res) => {
  try {
    const { from_currency_id, to_currency_id, exchange_rate } = req.body;

    if (!from_currency_id || !to_currency_id || !exchange_rate) {
      return res.status(400).send({
        message: "Los campos from_currency_id, to_currency_id y exchange_rate son obligatorios.",
      });
    }

    const rate = await CurrencyRates.findOne({
      where: { from_currency_id, to_currency_id },
    });

    if (rate) {
      // Actualizar tasa existente
      await rate.update({ exchange_rate, last_update: new Date() });
      res.status(200).send({ message: "Tasa de cambio actualizada correctamente.", rate });
    } else {
      // Crear nueva tasa
      const newRate = await CurrencyRates.create({ from_currency_id, to_currency_id, exchange_rate });
      res.status(201).send({ message: "Tasa de cambio creada correctamente.", rate: newRate });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error al crear o actualizar la tasa de cambio.",
      error: error.message,
    });
  }
};

// Obtener todas las tasas de cambio
exports.findAllRates = async (req, res) => {
  try {
    const rates = await CurrencyRates.findAll();
    res.status(200).send(rates);
  } catch (error) {
    res.status(500).send({
      message: "Error al recuperar las tasas de cambio.",
      error: error.message,
    });
  }
};
