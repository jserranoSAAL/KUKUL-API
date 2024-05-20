// controllers/tipoDeTasa.controller.js
const db = require('../models');
const TipoDeTasa = db.TipoDeTasa;

// Crear una nueva entrada de TipoDeTasa
exports.create = async (req, res) => {
    try {
        const newTipoDeTasa = await TipoDeTasa.create(req.body);
        res.status(201).json(newTipoDeTasa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las entradas de TipoDeTasa
exports.findAll = async (req, res) => {
    try {
        const tiposDeTasa = await TipoDeTasa.findAll();
        res.json(tiposDeTasa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener una entrada de TipoDeTasa por ID
exports.findOne = async (req, res) => {
    try {
        const tipoDeTasa = await TipoDeTasa.findOne({
            where: { ParametrosFinanzasID: req.params.id }  // Usar ParametrosFinanzasID
        });

        if (tipoDeTasa) {
            res.json(tipoDeTasa);
        } else {
            res.status(404).json({ error: 'Tipo de Tasa no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una entrada de TipoDeTasa por ParametrosFinanzasID
exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const [updated] = await TipoDeTasa.update(req.body, {
            where: { ParametrosFinanzasID: id }  // Usar ParametrosFinanzasID
        });

        if (updated) {
            const updatedTipoDeTasa = await TipoDeTasa.findOne({
                where: { ParametrosFinanzasID: id }
            });
            res.json(updatedTipoDeTasa);
        } else {
            res.status(404).json({ error: 'Tipo de Tasa no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una entrada de TipoDeTasa por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await TipoDeTasa.destroy({
            where: { ID: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Tipo de Tasa no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
