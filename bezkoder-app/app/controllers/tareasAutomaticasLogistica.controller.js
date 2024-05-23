const { Op } = require("sequelize");
const db = require("../models");
const TareaAutomaticaLogistica = db.TareaAutomaticaLogistica;

// Crear y Guardar una nueva Tarea Automática Logística
exports.create = async (req, res) => {
    try {
        const data = await TareaAutomaticaLogistica.create(req.body);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear la Tarea Automática Logística."
        });
    }
};

// Recuperar todas las Tareas Automáticas Logística
exports.findAll = async (req, res) => {
    try {
        const data = await TareaAutomaticaLogistica.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar las Tareas Automáticas Logística."
        });
    }
};

// Encontrar una Tarea Automática Logística por ID
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await TareaAutomaticaLogistica.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró la Tarea Automática Logística con id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando la Tarea Automática Logística con id=" + id
        });
    }
};

// Actualizar una Tarea Automática Logística por ID
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await TareaAutomaticaLogistica.update(req.body, { where: { id: id } });
        if (num == 1) {
            res.send({ message: "Tarea Automática Logística actualizada exitosamente." });
        } else {
            res.send({ message: `No se puede actualizar la Tarea Automática Logística con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error actualizando la Tarea Automática Logística con id=" + id
        });
    }
};

// Eliminar una Tarea Automática Logística por ID
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await TareaAutomaticaLogistica.destroy({ where: { id: id } });
        if (num == 1) {
            res.send({ message: "Tarea Automática Logística eliminada exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar la Tarea Automática Logística con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "No se pudo eliminar la Tarea Automática Logística con id=" + id
        });
    }
};

// Buscar Tareas Automáticas Logística por nombre usando LIKE
exports.findByName = async (req, res) => {
    const nombre = req.params.nombre;
    try {
        const data = await TareaAutomaticaLogistica.findAll({
            where: {
                responsable: {
                    [Op.like]: `%${nombre}%`
                }
            }
        });
        if (data.length > 0) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró ninguna Tarea Automática Logística que coincida con el responsable=${nombre}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando las Tareas Automáticas Logística con responsable=" + nombre
        });
    }
};
