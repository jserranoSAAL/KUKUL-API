const db = require("../models");
const ProductoCostosAdicionales = db.ProductoCostosAdicionales;

// Crear o actualizar un Costo Adicional de Producto (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { productoCostoId, ...costoAdicionalData } = req.body;

        // Buscar si ya existe un registro con el productoCostoId y tipoCosto
        const existingCostoAdicional = await ProductoCostosAdicionales.findOne({
            where: { productoCostoId, tipoCosto: costoAdicionalData.tipoCosto }
        });

        let productoCostoAdicional;
        if (existingCostoAdicional) {
            // Actualizar el registro existente
            productoCostoAdicional = await ProductoCostosAdicionales.update(
                { ...costoAdicionalData },
                { where: { productoCostoId, tipoCosto: costoAdicionalData.tipoCosto } }
            );
            res.status(200).json({
                message: "Costo Adicional de Producto actualizado exitosamente.",
                productoCostoAdicional
            });
        } else {
            // Crear un nuevo registro
            productoCostoAdicional = await ProductoCostosAdicionales.create({
                ...costoAdicionalData,
                productoCostoId
            });
            res.status(201).json({
                message: "Costo Adicional de Producto creado exitosamente.",
                productoCostoAdicional
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar el Costo Adicional de Producto."
        });
    }
};

// Buscar Costos Adicionales de Producto por productoCostoId
exports.findByProductoCostoId = async (req, res) => {
    try {
        const productoCostoId = req.params.productoCostoId;
        const productoCostosAdicionales = await ProductoCostosAdicionales.findAll({
            where: { productoCostoId }
        });

        if (productoCostosAdicionales) {
            res.status(200).json(productoCostosAdicionales);
        } else {
            res.status(404).json({
                message: `No se encontraron costos adicionales de producto con productoCostoId=${productoCostoId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Costos Adicionales de Producto."
        });
    }
};
