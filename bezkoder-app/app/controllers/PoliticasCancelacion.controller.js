const db = require('../models');
const PoliticasCancelacion = db.PoliticasCancelacion;

// Crear una nueva política de cancelación
exports.create = async (req, res) => {
    try {
        const politica = await PoliticasCancelacion.create({
            fecha_inicial: req.body.fecha_inicial,
            fecha_final: req.body.fecha_final,
            porcentaje: req.body.porcentaje
        });
        res.send(politica);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error al crear la política de cancelación."
        });
    }
};

// Obtener todas las políticas de cancelación
exports.findAll = async (req, res) => {
    try {
        const politicas = await PoliticasCancelacion.findAll();
        res.send(politicas);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error al recuperar las políticas de cancelación."
        });
    }
};

// Obtener una política de cancelación por ID
exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const politica = await PoliticasCancelacion.findByPk(id);
        if (!politica) {
            res.status(404).send({ message: "Política de cancelación no encontrada con el ID proporcionado." });
        } else {
            res.send(politica);
        }
    } catch (error) {
        res.status(500).send({ message: "Error al recuperar la política de cancelación con ID=" + id });
    }
};

// Actualizar una política de cancelación por ID
exports.update = async (req, res) => {
    const id = req.params.id;

    try {
        const [numRows, updatedPolitica] = await PoliticasCancelacion.update({
            fecha_inicial: req.body.fecha_inicial,
            fecha_final: req.body.fecha_final,
            porcentaje: req.body.porcentaje
        }, {
            where: { id: id },
            returning: true
        });

        if (numRows === 1) {
            res.send(updatedPolitica[0]);
        } else {
            res.status(404).send({ message: `No se pudo actualizar la política de cancelación con ID=${id}. Tal vez la política no fue encontrada o los datos de la solicitud están vacíos.` });
        }
    } catch (error) {
        res.status(500).send({ message: "Error al actualizar la política de cancelación con ID=" + id });
    }
};

// Eliminar una política de cancelación por ID
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const numRows = await PoliticasCancelacion.destroy({
            where: { id: id }
        });

        if (numRows === 1) {
            res.send({ message: "Política de cancelación eliminada exitosamente." });
        } else {
            res.status(404).send({ message: `No se pudo eliminar la política de cancelación con ID=${id}. Tal vez la política no fue encontrada.` });
        }
    } catch (error) {
        res.status(500).send({ message: "No se pudo eliminar la política de cancelación con ID=" + id });
    }
};
