// controllers/direccion.controller.js
const db = require('../models');
const Direccion = db.DireccionAgenciaViaje;

// Crear una nueva dirección
exports.create = async (req, res) => {
    try {
        const { calle, zona, ciudad, codigo_postal, region, pais, agenciaDeViajeId } = req.body;
        const direccion = await Direccion.create({ calle, zona, ciudad, codigo_postal, region, pais, agenciaDeViajeId });
        res.status(201).json({ message: "Dirección creada exitosamente.", direccion });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al crear la dirección." });
    }
};

// Obtener todas las direcciones
exports.findAll = async (req, res) => {
    try {
        const direcciones = await Direccion.findAll();
        res.json(direcciones);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar las direcciones." });
    }
};

// Obtener una dirección por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const direccion = await Direccion.findByPk(id);

        if (direccion) {
            res.json(direccion);
        } else {
            res.status(404).send({ message: `No se encontró la dirección con ID=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar la dirección." });
    }
};

// Actualizar una dirección por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { calle, zona, ciudad, codigo_postal, region, pais, agenciaDeViajeId } = req.body;
        const [num] = await Direccion.update(
            { calle, zona, ciudad, codigo_postal, region, pais, agenciaDeViajeId },
            { where: { id } }
        );

        if (num) {
            res.send({ message: "Dirección actualizada exitosamente." });
        } else {
            res.send({ message: `No se pudo actualizar la dirección con ID=${id}. Tal vez la dirección no fue encontrada o req.body está vacío.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al actualizar la dirección." });
    }
};

// Eliminar una dirección por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await Direccion.destroy({ where: { id } });

        if (num == 1) {
            res.send({ message: "Dirección eliminada exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar la dirección con ID=${id}. Tal vez la dirección no fue encontrada.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "No se pudo eliminar la dirección con ID=" + id });
    }
};

// Buscar dirección por agenciaDeViajeId
exports.findByAgenciaDeViajeId = async (req, res) => {
    try {
        const agenciaDeViajeId = req.params.agenciaDeViajeId;
        const direccion = await Direccion.findOne({ where: { agenciaDeViajeId } });

        if (direccion) {
            res.status(200).json(direccion);
        } else {
            res.status(404).json({ message: `No se encontró dirección con agenciaDeViajeId=${agenciaDeViajeId}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar la dirección." });
    }
};
