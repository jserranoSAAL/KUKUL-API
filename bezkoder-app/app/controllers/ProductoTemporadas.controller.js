const db = require("../models");
const ProductoTemporadas = db.ProductoTemporadas;

// Crear o actualizar una Temporada de Producto (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { productoCostoId, ...temporadaData } = req.body;

        // Buscar si ya existe un registro con el productoCostoId
        const existingTemporada = await ProductoTemporadas.findOne({
            where: { productoCostoId }
        });

        let productoTemporada;
        if (existingTemporada) {
            // Actualizar el registro existente
            productoTemporada = await ProductoTemporadas.update(
                { ...temporadaData },
                { where: { productoCostoId } }
            );
            res.status(200).json({
                message: "Temporada de Producto actualizada exitosamente.",
                productoTemporada
            });
        } else {
            // Crear un nuevo registro
            productoTemporada = await ProductoTemporadas.create({
                ...temporadaData,
                productoCostoId
            });
            res.status(201).json({
                message: "Temporada de Producto creada exitosamente.",
                productoTemporada
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar la Temporada de Producto."
        });
    }
};

// Buscar Temporada de Producto por productoCostoId
exports.findByProductoCostoId = async (req, res) => {
    try {
        const productoCostoId = req.params.productoCostoId;
        const productoTemporada = await ProductoTemporadas.findAll({
            where: { productoCostoId }
        });

        if (productoTemporada) {
            res.status(200).json(productoTemporada);
        } else {
            res.status(404).json({
                message: `No se encontró temporada de producto con productoCostoId=${productoCostoId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar la Temporada de Producto."
        });
    }
};
