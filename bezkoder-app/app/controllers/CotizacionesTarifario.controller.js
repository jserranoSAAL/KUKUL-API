const db = require("../models");
const CotizacionesTarifario = db.CotizacionesTarifario;

// Crear una nueva cotización
exports.create = async (req, res) => {
    try {
        const cotizacion = await CotizacionesTarifario.create(req.body);
        res.status(201).json(cotizacion);
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al crear la cotización." });
    }
};

// Obtener todas las cotizaciones
exports.findAll = async (req, res) => {
    try {
        const cotizaciones = await CotizacionesTarifario.findAll();
        res.status(200).json(cotizaciones);
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al obtener las cotizaciones." });
    }
};

// Obtener una cotización por ID
exports.findOne = async (req, res) => {
    try {
        const cotizacion = await CotizacionesTarifario.findByPk(req.params.id);
        if (cotizacion) {
            res.status(200).json(cotizacion);
        } else {
            res.status(404).json({ message: "Cotización no encontrada." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al obtener la cotización." });
    }
};

// Actualizar una cotización por ID
exports.update = async (req, res) => {
    try {
        const [updated] = await CotizacionesTarifario.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCotizacion = await CotizacionesTarifario.findByPk(req.params.id);
            res.status(200).json(updatedCotizacion);
        } else {
            res.status(404).json({ message: "Cotización no encontrada." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al actualizar la cotización." });
    }
};

// Eliminar una cotización por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await CotizacionesTarifario.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Cotización no encontrada." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al eliminar la cotización." });
    }
};
