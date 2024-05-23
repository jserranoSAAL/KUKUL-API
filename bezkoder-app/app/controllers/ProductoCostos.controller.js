const db = require("../models");
const ProductoCostos = db.ProductoCostos;
const ProductoTemporadas = db.ProductoTemporadas;
const ProductoCostosAdicionales = db.ProductoCostosAdicionales;

// Crear o actualizar un Costo de Producto (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { productoId, ...costoData } = req.body;

        // Buscar si ya existe un registro con el productoId
        const existingCosto = await ProductoCostos.findOne({
            where: { productoId }
        });

        let productoCosto;
        if (existingCosto) {
            // Actualizar el registro existente
            productoCosto = await ProductoCostos.update(
                { ...costoData },
                { where: { productoId } }
            );
            res.status(200).json({
                message: "Costo de Producto actualizado exitosamente.",
                productoCosto
            });
        } else {
            // Crear un nuevo registro
            productoCosto = await ProductoCostos.create({
                ...costoData,
                productoId
            });
            res.status(201).json({
                message: "Costo de Producto creado exitosamente.",
                productoCosto
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar el Costo de Producto."
        });
    }
};

// Buscar Costo de Producto por productoId
exports.findByProductoId = async (req, res) => {
    try {
        const productoId = req.params.productoId;
        const productoCosto = await ProductoCostos.findOne({
            where: { productoId }            
        });

        if (productoCosto) {
            res.status(200).json(productoCosto);
        } else {
            res.status(404).json({
                message: `No se encontró costo de producto con productoId=${productoId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar el Costo de Producto."
        });
    }
};
