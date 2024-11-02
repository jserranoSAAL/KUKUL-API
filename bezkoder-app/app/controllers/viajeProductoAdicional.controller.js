// controllers/viajeProductoAdicional.controller.js
const db = require('../models');
const ViajeProductoAdicional = db.ViajeProductoAdicional;

// Agregar un producto adicional a un viaje producto
exports.addAdicional = async (req, res) => {
    try {
        const { viajeProductoId, productoCostoAdicionalId, cantidad, comentario, valor } = req.body;
        const viajeProductoAdicional = await ViajeProductoAdicional.create({ 
            viajeProductoId, 
            productoCostoAdicionalId, 
            cantidad, 
            comentario, 
            valor 
        });
        res.status(201).json({ message: "Producto adicional agregado exitosamente.", viajeProductoAdicional });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al agregar el producto adicional." });
    }
};

// Obtener todos los productos adicionales
exports.findAll = async (req, res) => {
    try {
        const viajeProductosAdicionales = await ViajeProductoAdicional.findAll();
        res.json(viajeProductosAdicionales);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar los productos adicionales." });
    }
};

// Obtener un producto adicional por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const viajeProductoAdicional = await ViajeProductoAdicional.findByPk(id);

        if (viajeProductoAdicional) {
            res.json(viajeProductoAdicional);
        } else {
            res.status(404).send({ message: `No se encontró el producto adicional con ID=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar el producto adicional." });
    }
};

// Eliminar un producto adicional por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ViajeProductoAdicional.destroy({ where: { id } });

        if (num == 1) {
            res.send({ message: "Producto adicional eliminado exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar el producto adicional con ID=${id}. Tal vez no fue encontrado.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "No se pudo eliminar el producto adicional con ID=" + id });
    }
};

// Buscar producto adicional por productoCostoAdicionalId y viajeProductoId
exports.findByCostoAdicionalAndViajeProducto = async (req, res) => {
    try {
        const { productoCostoAdicionalId, viajeProductoId } = req.params;
        const viajeProductosAdicionales = await ViajeProductoAdicional.findAll({
            where: { 
                productoCostoAdicionalId,
                viajeProductoId 
            }
        });

        if (viajeProductosAdicionales.length > 0) {
            res.json(viajeProductosAdicionales);
        } else {
            res.status(404).send({ message: `No se encontraron productos adicionales con productoCostoAdicionalId=${productoCostoAdicionalId} y viajeProductoId=${viajeProductoId}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar los productos adicionales." });
    }
};

// Obtener todos los productos adicionales por viajeProductoId
exports.findByViajeProductoId = async (req, res) => {
    try {
        const viajeProductoId = req.params.viajeProductoId;
        const viajeProductosAdicionales = await ViajeProductoAdicional.findAll({
            where: { viajeProductoId }
        });

        if (viajeProductosAdicionales.length > 0) {
            res.json(viajeProductosAdicionales);
        } else {
            res.status(404).send({ message: `No se encontraron productos adicionales para viajeProductoId=${viajeProductoId}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar los productos adicionales." });
    }
};
