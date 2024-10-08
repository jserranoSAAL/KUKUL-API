// app/controllers/contactos.controller.js

const db = require('../models');
const Contactos = db.Contactos;

// Crear un nuevo Contacto
exports.create = async (req, res) => {
    try {
        const newContacto = await Contactos.create(req.body);
        res.status(201).json(newContacto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los Contactos
exports.findAll = async (req, res) => {
    try {
        const contactos = await Contactos.findAll();
        res.json(contactos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un Contacto por AgenciasDeViajeID
exports.findOne = async (req, res) => {
    try {
        const contacto = await Contactos.findAll({
            where: { AgenciasDeViajeID: req.params.id }
        });

        if (contacto) {
            res.json(contacto);
        } else {
            res.status(404).json({ error: 'Contacto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un Contacto por AgenciasDeViajeID
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Contactos.update(req.body, {
            where: { AgenciasDeViajeID: id }
        });

        if (updated) {
            const updatedContacto = await Contactos.findOne({
                where: { AgenciasDeViajeID: id }
            });
            res.json(updatedContacto);
        } else {
            res.status(404).json({ error: 'Contacto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un Contacto por AgenciasDeViajeID
exports.delete = async (req, res) => {
    try {
        const deleted = await Contactos.destroy({
            where: { AgenciasDeViajeID: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Contacto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
