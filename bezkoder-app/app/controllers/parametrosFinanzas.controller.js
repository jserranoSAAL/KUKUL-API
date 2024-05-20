// controllers/parametrosFinanzas.controller.js
const db = require("../models");
const ParametrosFinanzas = db.ParametrosFinanzas;

// Crear una nueva entrada de ParametrosFinanzas
exports.create = async (req, res) => {
  try {
    const newParametrosFinanzas = await ParametrosFinanzas.create(req.body);
    res.status(201).json(newParametrosFinanzas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las entradas de ParametrosFinanzas
exports.findAll = async (req, res) => {
  try {
    const parametrosFinanzas = await ParametrosFinanzas.findAll();
    res.json(parametrosFinanzas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener una entrada de ParametrosFinanzas por ID
exports.findOne = async (req, res) => {
  try {
    const parametrosFinanzas = await ParametrosFinanzas.findOne({
      where: { ID: req.params.id }, // Usar ID
    });

    if (parametrosFinanzas) {
      res.json(parametrosFinanzas);
    } else {
      res.status(404).json({ error: "ParametrosFinanzas no encontrados" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una entrada de ParametrosFinanzas por ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await ParametrosFinanzas.update(req.body, {
      where: { ID: id }, // Usar ID
    });

    if (updated) {
      const updatedParametrosFinanzas = await ParametrosFinanzas.findOne({
        where: { ID: id },
      });
      res.json(updatedParametrosFinanzas);
    } else {
      res.status(404).json({ error: "ParametrosFinanzas no encontrados" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una entrada de ParametrosFinanzas por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await ParametrosFinanzas.destroy({
      where: { ID: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "ParametrosFinanzas no encontrados" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
