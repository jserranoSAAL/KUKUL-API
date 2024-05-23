const db = require("../models");
const EstadoReservacion = db.EstadoReservacion;

// Crear y Guardar un nuevo Estado de Reservación
exports.create = async (req, res) => {
    try {
        const data = await EstadoReservacion.create(req.body);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear el Estado de Reservación."
        });
    }
};

// Recuperar todos los Estados de Reservación
exports.findAll = async (req, res) => {
    try {
        const data = await EstadoReservacion.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Estados de Reservación."
        });
    }
};

// Encontrar un Estado de Reservación por ID
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await EstadoReservacion.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró el Estado de Reservación con id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando el Estado de Reservación con id=" + id
        });
    }
};

// Actualizar un Estado de Reservación por ID
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await EstadoReservacion.update(req.body, { where: { id: id } });
        if (num == 1) {
            res.send({ message: "Estado de Reservación actualizado exitosamente." });
        } else {
            res.send({ message: `No se puede actualizar el Estado de Reservación con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error actualizando el Estado de Reservación con id=" + id
        });
    }
};

// Eliminar un Estado de Reservación por ID
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await EstadoReservacion.destroy({ where: { id: id } });
        if (num == 1) {
            res.send({ message: "Estado de Reservación eliminado exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar el Estado de Reservación con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "No se pudo eliminar el Estado de Reservación con id=" + id
        });
    }
};
