// controllers/construccionViaje.controller.js
const db = require('../models');
const ConstruccionViaje = db.ConstruccionViaje;

// Crear una nueva construcción de viaje
exports.create = async (req, res) => {
    try {
        const { nombre, fecha_inicio, fecha_fin, descripcion, agenciaDeViajeId, paqueteId } = req.body;
        const construccionViaje = await ConstruccionViaje.create({ nombre, fecha_inicio, fecha_fin, descripcion, agenciaDeViajeId, paqueteId });
        res.status(201).json({ message: "Construcción de viaje creada exitosamente.", construccionViaje });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al crear la construcción de viaje." });
    }
};

// Obtener todas las construcciones de viaje
exports.findAll = async (req, res) => {
    try {
        const construccionesViaje = await ConstruccionViaje.findAll();
        res.json(construccionesViaje);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar las construcciones de viaje." });
    }
};

// Obtener una construcción de viaje por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const construccionViaje = await ConstruccionViaje.findByPk(id);

        if (construccionViaje) {
            res.json(construccionViaje);
        } else {
            res.status(404).send({ message: `No se encontró la construcción de viaje con ID=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar la construcción de viaje." });
    }
};

// Actualizar una construcción de viaje por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, fecha_inicio, fecha_fin, descripcion, agenciaDeViajeId } = req.body;
        const [num] = await ConstruccionViaje.update(
            { nombre, fecha_inicio, fecha_fin, descripcion, agenciaDeViajeId },
            { where: { id } }
        );

        if (num == 1) {
            res.send({ message: "Construcción de viaje actualizada exitosamente." });
        } else {
            res.send({ message: `No se pudo actualizar la construcción de viaje con ID=${id}. Tal vez la construcción de viaje no fue encontrada o req.body está vacío.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al actualizar la construcción de viaje." });
    }
};

// Eliminar una construcción de viaje por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ConstruccionViaje.destroy({ where: { id } });

        if (num == 1) {
            res.send({ message: "Construcción de viaje eliminada exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar la construcción de viaje con ID=${id}. Tal vez la construcción de viaje no fue encontrada.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "No se pudo eliminar la construcción de viaje con ID=" + id });
    }
};

// Buscar construcciones de viaje por paqueteId
exports.findByPaqueteId = async (req, res) => {
    try {
        const paqueteId = req.params.paqueteId;
        const construccionesViaje = await ConstruccionViaje.findAll({ where: { paqueteId } });

        if (construccionesViaje.length > 0) {
            res.json(construccionesViaje);
        } else {
            res.status(404).send({ message: `No se encontraron construcciones de viaje para paqueteId=${paqueteId}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar las construcciones de viaje por paqueteId." });
    }
};