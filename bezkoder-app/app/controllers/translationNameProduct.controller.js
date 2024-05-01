const db = require('../models');
const TranslationNameProduct = db.TranslationNameProduct;

// Crear una nueva traducción del nombre del producto
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.ProductoID || !req.body.TECH || !req.body.EN || !req.body.ES || !req.body.FR) {
        res.status(400).send({
            message: "Todos los campos son requeridos."
        });
        return;
    }

    // Crear una nueva traducción del nombre del producto
    const translationNameProduct = {
        ProductoID: req.body.ProductoID,
        TECH: req.body.TECH,
        EN: req.body.EN,
        ES: req.body.ES,
        FR: req.body.FR
    };

    // Guardar la traducción del nombre del producto en la base de datos
    TranslationNameProduct.create(translationNameProduct)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al crear la traducción del nombre del producto."
            });
        });
};

// Obtener todas las traducciones de nombres de productos
exports.findAll = (req, res) => {
    TranslationNameProduct.findAll()
        .then(translations => {
            res.json(translations);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar las traducciones de nombres de productos."
            });
        });
};

// Obtener una traducción de nombre de producto por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    TranslationNameProduct.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró la traducción del nombre de producto con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la traducción del nombre de producto con ID=" + id
            });
        });
};

// Actualizar una traducción de nombre de producto por ID
exports.update = (req, res) => {
    const id = req.params.id;

    TranslationNameProduct.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Traducción de nombre de producto actualizada correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar la traducción del nombre de producto con ID=${id}. Tal vez la traducción no fue encontrada o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando la traducción del nombre de producto con ID=" + id
        });
    });
};

// Eliminar una traducción de nombre de producto por ID
exports.delete = (req, res) => {
    const id = req.params.id;

    TranslationNameProduct.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Traducción de nombre de producto eliminada correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la traducción de nombre de producto con ID=${id}. Tal vez la traducción no fue encontrada.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la traducción de nombre de producto con ID=" + id
        });
    });
};
