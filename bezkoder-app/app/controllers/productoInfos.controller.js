const db = require("../models");
const ProductoInfos = db.ProductoInfos;

// Crear o actualizar una Información de Producto (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { productoId, ...infoData } = req.body;

        // Verificar si ya existe una información de producto con el productoId
        const existingProductoInfo = await ProductoInfos.findOne({ where: { productoId } });

        let productoInfo;
        if (existingProductoInfo) {
            // Actualizar la información existente
            await ProductoInfos.update(
                { ...infoData },
                { where: { productoId } }
            );
            productoInfo = await ProductoInfos.findOne({ where: { productoId } });
            res.status(200).json({
                message: "Información de Producto actualizada exitosamente.",
                productoInfo
            });
        } else {
            // Crear una nueva información de producto
            productoInfo = await ProductoInfos.create({
                ...infoData,
                productoId
            });
            res.status(201).json({
                message: "Información de Producto creada exitosamente.",
                productoInfo
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar la Información de Producto."
        });
    }
};

// Buscar Información de Producto por productoId
exports.findByProductoId = async (req, res) => {
    try {
        const productoId = req.params.productoId;
        const productoInfo = await ProductoInfos.findOne({ where: { productoId } });

        if (productoInfo) {
            res.status(200).json(productoInfo);
        } else {
            res.status(404).json({
                message: `No se encontró información de producto con productoId=${productoId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar la Información de Producto."
        });
    }
};
