const db = require("../models");
const ProductoAdmin = db.ProductoAdmin;

// Crear o actualizar Admin de Producto (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { productoId, ...adminData } = req.body;

        // Buscar si ya existe un registro con el productoId
        const existingAdmin = await ProductoAdmin.findOne({
            where: { productoId }
        });

        let productoAdmin;
        if (existingAdmin) {
            // Actualizar el registro existente
            productoAdmin = await ProductoAdmin.update(
                { ...adminData },
                { where: { productoId } }
            );
            res.status(200).json({
                message: "Admin de Producto actualizado exitosamente.",
                productoAdmin
            });
        } else {
            // Crear un nuevo registro
            productoAdmin = await ProductoAdmin.create({
                ...adminData,
                productoId
            });
            res.status(201).json({
                message: "Admin de Producto creado exitosamente.",
                productoAdmin
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar el Admin de Producto."
        });
    }
};

// Buscar Admin de Producto por productoId
exports.findByProductoId = async (req, res) => {
    try {
        const productoId = req.params.productoId;
        const productoAdmin = await ProductoAdmin.findOne({
            where: { productoId }
        });

        if (productoAdmin) {
            res.status(200).json(productoAdmin);
        } else {
            res.status(404).json({
                message: `No se encontró admin de producto con productoId=${productoId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar el Admin de Producto."
        });
    }
};
