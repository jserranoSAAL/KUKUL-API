// app/controllers/direcciones.controller.js

const db = require('../models');
const Direcciones = db.Direcciones;

// Crear una nueva Dirección
exports.create = async (req, res) => {
    try {
        const newDireccion = await Direcciones.create(req.body);
        res.status(201).json(newDireccion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las Direcciones
exports.findAll = async (req, res) => {
    try {
        const direcciones = await Direcciones.findAll();
        res.json(direcciones);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener una Dirección por ID
exports.findOne = async (req, res) => {
    try {
        const direccion = await Direcciones.findOne({
            where: { AgenciasDeViajeID: req.params.id }
        });

        if (direccion) {
            res.json(direccion);
        } else {
            res.status(404).json({ error: 'Dirección no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una Dirección por ID
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Direcciones.update(req.body, {
            where: { AgenciasDeViajeID: id }
        });

        if (updated) {
            const updatedDireccion = await Direcciones.findOne({
                where: { AgenciasDeViajeID: id }
            });
            res.json(updatedDireccion);
        } else {
            res.status(404).json({ error: 'Dirección no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una Dirección por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Direcciones.destroy({
            where: { ID: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Dirección no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
