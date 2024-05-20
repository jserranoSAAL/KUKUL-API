// controllers/politicaDeCancelacion.controller.js
const db = require('../models');
const PoliticaDeCancelacion = db.PoliticaDeCancelacion;

// Crear una nueva entrada de PoliticaDeCancelacion
exports.create = async (req, res) => {
    try {
        const newPoliticaDeCancelacion = await PoliticaDeCancelacion.create(req.body);
        res.status(201).json(newPoliticaDeCancelacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las entradas de PoliticaDeCancelacion
exports.findAll = async (req, res) => {
    try {
        const politicasDeCancelacion = await PoliticaDeCancelacion.findAll();
        res.json(politicasDeCancelacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener una entrada de PoliticaDeCancelacion por ID
exports.findOne = async (req, res) => {
    try {
        const politicaDeCancelacion = await PoliticaDeCancelacion.findOne({
            where: { ParametrosFinanzasID: req.params.id }  // Usar ParametrosFinanzasID
        });

        if (politicaDeCancelacion) {
            res.json(politicaDeCancelacion);
        } else {
            res.status(404).json({ error: 'Politica de Cancelacion no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una entrada de PoliticaDeCancelacion por ParametrosFinanzasID
exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const [updated] = await PoliticaDeCancelacion.update(req.body, {
            where: { ParametrosFinanzasID: id }  // Usar ParametrosFinanzasID
        });

        if (updated) {
            const updatedPoliticaDeCancelacion = await PoliticaDeCancelacion.findOne({
                where: { ParametrosFinanzasID: id }
            });
            res.json(updatedPoliticaDeCancelacion);
        } else {
            res.status(404).json({ error: 'Politica de Cancelacion no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una entrada de PoliticaDeCancelacion por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await PoliticaDeCancelacion.destroy({
            where: { ID: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Politica de Cancelacion no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
