const db = require("../models");
const ProductoCostosAdicionales = db.ProductoCostosAdicionales;

// Crear un nuevo Costo Adicional de Producto
exports.create = async (req, res) => {
    try {
        const { productoCostoId, ...costoAdicionalData } = req.body;

        // Crear un nuevo registro
        const productoCostoAdicional = await ProductoCostosAdicionales.create({
            ...costoAdicionalData,
            productoCostoId
        });
        res.status(201).json({
            message: "Costo Adicional de Producto creado exitosamente.",
            productoCostoAdicional
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear el Costo Adicional de Producto."
        });
    }
};

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

// Obtener todos los Costos Adicionales de Producto
exports.findAll = async (req, res) => {
    try {
        const productoCostosAdicionales = await ProductoCostosAdicionales.findAll();
        res.status(200).json(productoCostosAdicionales);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Costos Adicionales de Producto."
        });
    }
};

// Obtener un Costo Adicional de Producto por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const productoCostoAdicional = await ProductoCostosAdicionales.findByPk(id);

        if (productoCostoAdicional) {
            res.status(200).json(productoCostoAdicional);
        } else {
            res.status(404).json({
                message: `No se encontró el costo adicional de producto con ID=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar el Costo Adicional de Producto."
        });
    }
};

// Actualizar un Costo Adicional de Producto por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { productoCostoId, ...costoAdicionalData } = req.body;

        const [num] = await ProductoCostosAdicionales.update(
            { ...costoAdicionalData, productoCostoId },
            { where: { id } }
        );

        if (num == 1) {
            res.status(200).json({
                message: "Costo Adicional de Producto actualizado exitosamente."
            });
        } else {
            res.status(404).json({
                message: `No se pudo actualizar el costo adicional de producto con ID=${id}. Tal vez el Costo Adicional de Producto no fue encontrado o req.body está vacío.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al actualizar el Costo Adicional de Producto."
        });
    }
};

// Eliminar un Costo Adicional de Producto por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ProductoCostosAdicionales.destroy({ where: { id } });

        if (num == 1) {
            res.status(200).json({
                message: "Costo Adicional de Producto eliminado exitosamente."
            });
        } else {
            res.status(404).json({
                message: `No se pudo eliminar el costo adicional de producto con ID=${id}. Tal vez el Costo Adicional de Producto no fue encontrado.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "No se pudo eliminar el Costo Adicional de Producto con ID=" + id
        });
    }
};
