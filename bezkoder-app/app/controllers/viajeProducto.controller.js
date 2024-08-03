// controllers/viajeProducto.controller.js
const db = require('../models');
const ViajeProducto = db.ViajeProducto;

// Crear una nueva relación Viaje-Producto
exports.create = async (req, res) => {
    try {
        const { viajeId, productoId, fecha, hora_inicio, fecha_salida, hora_fin, cantidad, costo_unitario } = req.body;
        const viajeProducto = await ViajeProducto.create({ viajeId, productoId, fecha, hora_inicio, fecha_salida, hora_fin, cantidad, costo_unitario });
        res.status(201).json({ message: "Relación Viaje-Producto creada exitosamente.", viajeProducto });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al crear la relación Viaje-Producto." });
    }
};

// Obtener todas las relaciones Viaje-Producto
exports.findAll = async (req, res) => {
    try {
        const viajeProductos = await ViajeProducto.findAll();
        res.json(viajeProductos);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar las relaciones Viaje-Producto." });
    }
};

// Obtener una relación Viaje-Producto por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const viajeProducto = await ViajeProducto.findByPk(id);

        if (viajeProducto) {
            res.json(viajeProducto);
        } else {
            res.status(404).send({ message: `No se encontró la relación Viaje-Producto con ID=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar la relación Viaje-Producto." });
    }
};

// Actualizar una relación Viaje-Producto por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { viajeId, productoId, fecha, hora_inicio, fecha_salida, hora_fin, cantidad, costo_unitario } = req.body;
        const [num] = await ViajeProducto.update(
            { viajeId, productoId, fecha, hora_inicio, fecha_salida, hora_fin, cantidad, costo_unitario },
            { where: { id } }
        );

        if (num == 1) {
            res.send({ message: "Relación Viaje-Producto actualizada exitosamente." });
        } else {
            res.send({ message: `No se pudo actualizar la relación Viaje-Producto con ID=${id}. Tal vez la relación no fue encontrada o req.body está vacío.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al actualizar la relación Viaje-Producto." });
    }
};

// Eliminar una relación Viaje-Producto por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ViajeProducto.destroy({ where: { id } });

        if (num == 1) {
            res.send({ message: "Relación Viaje-Producto eliminada exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar la relación Viaje-Producto con ID=${id}. Tal vez la relación no fue encontrada.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "No se pudo eliminar la relación Viaje-Producto con ID=" + id });
    }
};


// Obtener todas las relaciones Viaje-Producto por viajeId
exports.findByViajeId = async (req, res) => {
    try {
        const viajeId = req.params.viajeId;
        const viajeProductos = await ViajeProducto.findAll({
            where: { viajeId }
        });

        if (viajeProductos.length > 0) {
            res.json(viajeProductos);
        } else {
            res.status(404).send({ message: `No se encontraron relaciones Viaje-Producto con viajeId=${viajeId}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar las relaciones Viaje-Producto." });
    }
};
