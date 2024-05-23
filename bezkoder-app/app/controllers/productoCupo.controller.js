const db = require("../models");
const ProductoCupo = db.ProductoCupo;

// Crear o actualizar Cupo de Producto (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { productoId, ...cupoData } = req.body;

        // Buscar si ya existe un registro con el productoId
        const existingCupo = await ProductoCupo.findOne({
            where: { productoId }
        });

        let productoCupo;
        if (existingCupo) {
            // Actualizar el registro existente
            productoCupo = await ProductoCupo.update(
                { ...cupoData },
                { where: { productoId } }
            );
            res.status(200).json({
                message: "Cupo de Producto actualizado exitosamente.",
                productoCupo
            });
        } else {
            // Crear un nuevo registro
            productoCupo = await ProductoCupo.create({
                ...cupoData,
                productoId
            });
            res.status(201).json({
                message: "Cupo de Producto creado exitosamente.",
                productoCupo
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar el Cupo de Producto."
        });
    }
};

// Buscar Cupo de Producto por productoId
exports.findByProductoId = async (req, res) => {
    try {
        const productoId = req.params.productoId;
        const productoCupo = await ProductoCupo.findOne({
            where: { productoId }
        });

        if (productoCupo) {
            res.status(200).json(productoCupo);
        } else {
            res.status(404).json({
                message: `No se encontró cupo de producto con productoId=${productoId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar el Cupo de Producto."
        });
    }
};
