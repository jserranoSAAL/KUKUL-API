const { Op } = require("sequelize");
const db = require("../models");
const CentroDeOperacion = db.CentroDeOperacion;

// Crear y Guardar un nuevo Centro de Operación
exports.create = async (req, res) => {
    try {
        const data = await CentroDeOperacion.create(req.body);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear el Centro de Operación."
        });
    }
};

// Recuperar todos los Centros de Operación
exports.findAll = async (req, res) => {
    try {
        const data = await CentroDeOperacion.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Centros de Operación."
        });
    }
};

// Encontrar un Centro de Operación por ID
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await CentroDeOperacion.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró el Centro de Operación con id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando el Centro de Operación con id=" + id
        });
    }
};

// Actualizar un Centro de Operación por ID
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await CentroDeOperacion.update(req.body, { where: { id: id } });
        if (num == 1) {
            res.send({ message: "Centro de Operación actualizado exitosamente." });
        } else {
            res.send({ message: `No se puede actualizar el Centro de Operación con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error actualizando el Centro de Operación con id=" + id
        });
    }
};

// Eliminar un Centro de Operación por ID
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await CentroDeOperacion.destroy({ where: { id: id } });
        if (num == 1) {
            res.send({ message: "Centro de Operación eliminado exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar el Centro de Operación con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "No se pudo eliminar el Centro de Operación con id=" + id
        });
    }
};

// Buscar un Centro de Operación por nombre usando LIKE
exports.findByName = async (req, res) => {
    const nombre = req.params.nombre;
    try {
        const data = await CentroDeOperacion.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${nombre}%`
                }
            }
        });
        if (data.length > 0) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró ningún Centro de Operación que coincida con nombre=${nombre}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando el Centro de Operación con nombre=" + nombre
        });
    }
};
