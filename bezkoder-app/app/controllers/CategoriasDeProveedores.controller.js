const db = require('../models');
const CategoriasDeProveedores = db.CategoriasDeProveedores;

// Método para crear una nueva categoría de proveedores
exports.create = async (req, res) => {
    try {
        // Validar la solicitud
        if (!req.body.nombre || req.body.hiden === undefined || req.body.web === undefined || !req.body.proveedorId) {
            res.status(400).send({
                message: "Todos los campos son requeridos."
            });
            return;
        }

        // Crear una nueva categoría de proveedores
        const categoria = {
            nombre: req.body.nombre,
            hiden: req.body.hiden,
            web: req.body.web,
            proveedorId: req.body.proveedorId
        };

        // Guardar la categoría en la base de datos
        const nuevaCategoria = await CategoriasDeProveedores.create(categoria);
        res.status(201).send(nuevaCategoria);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error al crear la categoría de proveedores."
        });
    }
};

// Método para obtener todas las categorías de proveedores
exports.findAll = async (req, res) => {
    try {
        const categorias = await CategoriasDeProveedores.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error al recuperar las categorías de proveedores."
        });
    }
};

// Método para obtener una categoría por su ID
exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const categoria = await CategoriasDeProveedores.findByPk(id);
        if (!categoria) {
            res.status(404).send({ message: `No se encontró la categoría con ID=${id}.` });
            return;
        }
        res.json(categoria);
    } catch (error) {
        res.status(500).send({
            message: error.message || `Error al recuperar la categoría con ID=${id}.`
        });
    }
};

// Método para actualizar una categoría por su ID
exports.update = async (req, res) => {
    const id = req.params.id;

    try {
        const [updated] = await CategoriasDeProveedores.update(req.body, {
            where: { codigo: id }
        });
        if (updated === 1) {
            res.send({ message: "Categoría actualizada correctamente." });
        } else {
            res.status(404).send({ message: `No se encontró la categoría con ID=${id}.` });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || `Error al actualizar la categoría con ID=${id}.`
        });
    }
};

// Método para eliminar una categoría por su ID
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedRows = await CategoriasDeProveedores.destroy({
            where: { codigo: id }
        });
        if (deletedRows === 1) {
            res.send({ message: "Categoría eliminada correctamente." });
        } else {
            res.status(404).send({ message: `No se encontró la categoría con ID=${id}.` });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || `Error al eliminar la categoría con ID=${id}.`
        });
    }
};
