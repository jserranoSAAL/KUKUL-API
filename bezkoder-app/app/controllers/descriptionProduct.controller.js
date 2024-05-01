const db = require('../models');
const DescriptionProduct = db.DescriptionProduct;

// Crear y guardar una nueva descripción de producto
exports.create = (req, res) => {
    // Validar solicitud
    if (!req.body.ProductoID || !req.body.TECH || !req.body.EN || !req.body.ES || !req.body.FR) {
        res.status(400).send({
            message: "Todos los campos son requeridos!"
        });
        return;
    }

    // Crear una descripción de producto
    const descriptionProduct = {
        ProductoID: req.body.ProductoID,
        TECH: req.body.TECH,
        EN: req.body.EN,
        ES: req.body.ES,
        FR: req.body.FR
    };

    // Guardar DescriptionProduct en la base de datos
    DescriptionProduct.create(descriptionProduct)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al crear la descripción del producto."
            });
        });
};

// Obtener todas las descripciones de productos
exports.findAll = (req, res) => {
    DescriptionProduct.findAll()
        .then(descriptions => {
            res.json(descriptions);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar las descripciones de productos."
            });
        });
};

// Obtener una descripción de producto por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    DescriptionProduct.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró la descripción del producto con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la descripción del producto con ID=" + id
            });
        });
};

// Actualizar una descripción de producto por ID
exports.update = (req, res) => {
    const id = req.params.id;

    DescriptionProduct.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Descripción del producto actualizada correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar la descripción del producto con ID=${id}. Tal vez la descripción no fue encontrada o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando la descripción del producto con ID=" + id
        });
    });
};

// Eliminar una descripción de producto con el ID especificado
exports.delete = (req, res) => {
    const id = req.params.id;

    DescriptionProduct.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Descripción del producto eliminada correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la descripción del producto con ID=${id}. Tal vez la descripción no fue encontrada.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la descripción del producto con ID=" + id
        });
    });
};
