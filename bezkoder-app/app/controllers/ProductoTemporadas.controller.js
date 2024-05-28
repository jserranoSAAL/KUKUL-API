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

// Crear una nueva Temporada de Producto
exports.create = async (req, res) => {
    try {
        const temporada = await ProductoTemporadas.create(req.body);
        res.status(201).json(temporada);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear la Temporada de Producto."
        });
    }
};

// Obtener todas las Temporadas de Producto
exports.findAll = async (req, res) => {
    try {
        const temporadas = await ProductoTemporadas.findAll();
        res.status(200).json(temporadas);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar las Temporadas de Producto."
        });
    }
};

// Obtener una Temporada de Producto por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const temporada = await ProductoTemporadas.findByPk(id);

        if (temporada) {
            res.status(200).json(temporada);
        } else {
            res.status(404).send({
                message: `No se encontró la Temporada de Producto con ID=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar la Temporada de Producto."
        });
    }
};

// Actualizar una Temporada de Producto por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ProductoTemporadas.update(req.body, {
            where: { id }
        });

        if (num == 1) {
            res.send({
                message: "Temporada de Producto actualizada exitosamente."
            });
        } else {
            res.send({
                message: `No se pudo actualizar la Temporada de Producto con ID=${id}. Tal vez la Temporada de Producto no fue encontrada o req.body está vacío.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al actualizar la Temporada de Producto."
        });
    }
};

// Eliminar una Temporada de Producto por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ProductoTemporadas.destroy({
            where: { id }
        });

        if (num == 1) {
            res.send({
                message: "Temporada de Producto eliminada exitosamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la Temporada de Producto con ID=${id}. Tal vez la Temporada de Producto no fue encontrada.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "No se pudo eliminar la Temporada de Producto con ID=" + id
        });
    }
};

// Eliminar todas las Temporadas de Producto
exports.deleteAll = async (req, res) => {
    try {
        const nums = await ProductoTemporadas.destroy({
            where: {},
            truncate: false
        });
        res.send({ message: `${nums} Temporadas de Producto fueron eliminadas exitosamente!` });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al eliminar todas las Temporadas de Producto."
        });
    }
};
