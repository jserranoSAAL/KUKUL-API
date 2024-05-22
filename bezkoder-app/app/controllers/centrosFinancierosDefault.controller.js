const db = require("../models");
const CentroFinancieroDefault = db.CentroFinancieroDefault;
const CentroFinanciero = db.CentroFinanciero;

// Crear y Guardar un nuevo Centro Financiero Por Defecto
exports.create = async (req, res) => {
    try {
        const data = await CentroFinancieroDefault.create(req.body);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear el Centro Financiero Por Defecto."
        });
    }
};

// Recuperar todos los Centros Financieros Por Defecto
exports.findAll = async (req, res) => {
    try {
        const data = await CentroFinancieroDefault.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Centros Financieros Por Defecto."
        });
    }
};

// Encontrar un Centro Financiero Por Defecto por ID
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await CentroFinancieroDefault.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró el Centro Financiero Por Defecto con id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando el Centro Financiero Por Defecto con id=" + id
        });
    }
};

// Actualizar un Centro Financiero Por Defecto por ID
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await CentroFinancieroDefault.update(req.body, { where: { id: id } });
        if (num == 1) {
            res.send({ message: "Centro Financiero Por Defecto actualizado exitosamente." });
        } else {
            res.send({ message: `No se puede actualizar el Centro Financiero Por Defecto con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error actualizando el Centro Financiero Por Defecto con id=" + id
        });
    }
};

// Eliminar un Centro Financiero Por Defecto por ID
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await CentroFinancieroDefault.destroy({ where: { id: id } });
        if (num == 1) {
            res.send({ message: "Centro Financiero Por Defecto eliminado exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar el Centro Financiero Por Defecto con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "No se pudo eliminar el Centro Financiero Por Defecto con id=" + id
        });
    }
};

// Upsert (insertar o actualizar) un Centro Financiero Default
exports.upsert = async (req, res) => {
    const { categoria, centro_financiero_id } = req.body;

    try {
        // Verificar que el Centro Financiero exista
        const centroFinanciero = await CentroFinanciero.findByPk(centro_financiero_id);
        if (!centroFinanciero) {
            return res.status(404).send({
                message: `No se encontró el Centro Financiero con id=${centro_financiero_id}.`
            });
        }

        // Buscar o crear el Centro Financiero Default
        const [centroFinancieroDefault, created] = await CentroFinancieroDefault.findOrCreate({
            where: { categoria: categoria },
            defaults: { centro_financiero_id: centro_financiero_id }
        });

        if (!created) {
            // Si el Centro Financiero Default ya existe, actualizarlo
            await centroFinancieroDefault.update({ centro_financiero_id: centro_financiero_id });
        }

        res.send({
            message: created ? "Centro Financiero Default creado exitosamente." : "Centro Financiero Default actualizado exitosamente.",
            centroFinancieroDefault: centroFinancieroDefault
        });
    } catch (err) {
        res.status(500).send({
            message: "Error al realizar el upsert del Centro Financiero Default: " + err.message
        });
    }
};
