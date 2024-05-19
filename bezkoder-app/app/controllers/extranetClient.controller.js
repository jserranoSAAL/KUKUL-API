// app/controllers/extranetClient.controller.js

const db = require('../models');
const ExtranetClient = db.ExtranetClient;

// Crear un nuevo ExtranetClient
exports.create = async (req, res) => {
    try {
        const newExtranetClient = await ExtranetClient.create(req.body);
        res.status(201).json(newExtranetClient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los ExtranetClient
exports.findAll = async (req, res) => {
    try {
        const extranetClients = await ExtranetClient.findAll();
        res.json(extranetClients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un ExtranetClient por ID
exports.findOne = async (req, res) => {
    try {
        const extranetClient = await ExtranetClient.findOne({
            where: { AgenciasDeViajeID: req.params.id }
        });

        if (extranetClient) {
            res.json(extranetClient);
        } else {
            res.status(404).json({ error: 'ExtranetClient no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un ExtranetClient por ID
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await ExtranetClient.update(req.body, {
            where: { ID: id }
        });

        if (updated) {
            const updatedExtranetClient = await ExtranetClient.findOne({
                where: { AgenciasDeViajeID: id }
            });
            res.json(updatedExtranetClient);
        } else {
            res.status(404).json({ error: 'ExtranetClient no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un ExtranetClient por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await ExtranetClient.destroy({
            where: { AgenciasDeViajeID: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'ExtranetClient no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
