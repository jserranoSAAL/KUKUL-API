const db = require("../models");
const ProductoLogistica = db.ProductoLogistica;

// Crear o actualizar Logística de Producto (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { productoId, ...logisticaData } = req.body;

        // Buscar si ya existe un registro con el productoId
        const existingLogistica = await ProductoLogistica.findOne({
            where: { productoId }
        });

        let productoLogistica;
        if (existingLogistica) {
            // Actualizar el registro existente
            productoLogistica = await ProductoLogistica.update(
                { ...logisticaData },
                { where: { productoId } }
            );
            res.status(200).json({
                message: "Logística de Producto actualizada exitosamente.",
                productoLogistica
            });
        } else {
            // Crear un nuevo registro
            productoLogistica = await ProductoLogistica.create({
                ...logisticaData,
                productoId
            });
            res.status(201).json({
                message: "Logística de Producto creada exitosamente.",
                productoLogistica
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar la Logística de Producto."
        });
    }
};

// Buscar Logística de Producto por productoId
exports.findByProductoId = async (req, res) => {
    try {
        const productoId = req.params.productoId;
        const productoLogistica = await ProductoLogistica.findOne({
            where: { productoId }
        });

        if (productoLogistica) {
            res.status(200).json(productoLogistica);
        } else {
            res.status(404).json({
                message: `No se encontró logística de producto con productoId=${productoId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar la Logística de Producto."
        });
    }
};
