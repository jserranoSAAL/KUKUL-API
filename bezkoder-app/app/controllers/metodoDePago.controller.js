// controllers/metodoDePago.controller.js
const db = require('../models');
const MetodoDePago = db.MetodoDePago;

// Crear una nueva entrada de MetodoDePago
exports.create = async (req, res) => {
    try {
        const newMetodoDePago = await MetodoDePago.create(req.body);
        res.status(201).json(newMetodoDePago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las entradas de MetodoDePago
exports.findAll = async (req, res) => {
    try {
        const metodosDePago = await MetodoDePago.findAll();
        res.json(metodosDePago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener una entrada de MetodoDePago por ID
exports.findOne = async (req, res) => {
    try {
        const metodoDePago = await MetodoDePago.findOne({
            where: { ParametrosFinanzasID: req.params.id }  // Usar ParametrosFinanzasID
        });

        if (metodoDePago) {
            res.json(metodoDePago);
        } else {
            res.status(404).json({ error: 'Metodo de Pago no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una entrada de MetodoDePago por ParametrosFinanzasID
exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const [updated] = await MetodoDePago.update(req.body, {
            where: { ParametrosFinanzasID: id }  // Usar ParametrosFinanzasID
        });

        if (updated) {
            const updatedMetodoDePago = await MetodoDePago.findOne({
                where: { ParametrosFinanzasID: id }
            });
            res.json(updatedMetodoDePago);
        } else {
            res.status(404).json({ error: 'Metodo de Pago no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una entrada de MetodoDePago por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await MetodoDePago.destroy({
            where: { ID: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Metodo de Pago no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
