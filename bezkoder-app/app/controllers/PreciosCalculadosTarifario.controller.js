const db = require("../models");
const PreciosCalculadosTarifario = db.PreciosCalculadosTarifario;

// Crear un nuevo precio calculado
exports.create = async (req, res) => {
    try {
        const precio = await PreciosCalculadosTarifario.create(req.body);
        res.status(201).json(precio);
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al crear el precio calculado." });
    }
};

// Obtener todos los precios calculados
exports.findAll = async (req, res) => {
    try {
        const precios = await PreciosCalculadosTarifario.findAll();
        res.status(200).json(precios);
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al obtener los precios calculados." });
    }
};

// Obtener un precio calculado por ID
exports.findOne = async (req, res) => {
    try {
        const precio = await PreciosCalculadosTarifario.findByPk(req.params.id);
        if (precio) {
            res.status(200).json(precio);
        } else {
            res.status(404).json({ message: "Precio calculado no encontrado." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al obtener el precio calculado." });
    }
};

// Actualizar un precio calculado por ID
exports.update = async (req, res) => {
    try {
        const [updated] = await PreciosCalculadosTarifario.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPrecio = await PreciosCalculadosTarifario.findByPk(req.params.id);
            res.status(200).json(updatedPrecio);
        } else {
            res.status(404).json({ message: "Precio calculado no encontrado." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message || "Ocurrió un error al actualizar el precio calculado." });
    }
};

// Eliminar un precio calculado por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await PreciosCalculadosTarifario.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Precio calculado no encontrado." });
        }
    } catch (err) {
        res.status({message: err.message || "Ocurrió un error al eliminar el precio calculado." });
    }
};
