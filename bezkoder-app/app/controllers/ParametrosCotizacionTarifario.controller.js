const db = require("../models");
const ParametrosCotizacionTarifario = db.ParametrosCotizacionTarifario;

// Crear un nuevo parámetro de cotización
exports.create = async (req, res) => {
    try {
        const parametro = await ParametrosCotizacionTarifario.create(req.body);
        res.status(201).json(parametro);
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al crear el parámetro de cotización." });
    }
};

// Obtener todos los parámetros de cotización
exports.findAll = async (req, res) => {
    try {
        const parametros = await ParametrosCotizacionTarifario.findAll();
        res.status(200).json(parametros);
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al obtener los parámetros de cotización." });
    }
};

// Obtener un parámetro de cotización por ID
exports.findOne = async (req, res) => {
    try {
        const parametro = await ParametrosCotizacionTarifario.findByPk(req.params.id);
        if (parametro) {
            res.status(200).json(parametro);
        } else {
            res.status(404).json({ message: "Parámetro de cotización no encontrado." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al obtener el parámetro de cotización." });
    }
};

// Actualizar un parámetro de cotización por ID
exports.update = async (req, res) => {
    try {
        const [updated] = await ParametrosCotizacionTarifario.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedParametro = await ParametrosCotizacionTarifario.findByPk(req.params.id);
            res.status(200).json(updatedParametro);
        } else {
            res.status(404).json({ message: "Parámetro de cotización no encontrado." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al actualizar el parámetro de cotización." });
    }
};

// Eliminar un parámetro de cotización por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await ParametrosCotizacionTarifario.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Parámetro de cotización no encontrado." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al eliminar el parámetro de cotización." });
    }
};
