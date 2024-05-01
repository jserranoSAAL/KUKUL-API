const db = require('../models');
const TravelBookProduct = db.TravelBookProduct;

// Obtener todos los libros de viaje asociados a productos
exports.findAll = (req, res) => {
    TravelBookProduct.findAll()
        .then(travelBooks => {
            res.json(travelBooks);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los libros de viaje asociados a productos."
            });
        });
};

// Crear y guardar un nuevo libro de viaje asociado a un producto
exports.create = (req, res) => {
    const { TECH, EN, ES, FR, ProductoID } = req.body;

    // Validar solicitud
    if (!(TECH && EN && ES && FR && ProductoID)) {
        res.status(400).send({
            message: "Todos los campos son requeridos."
        });
        return;
    }

    // Crear un nuevo libro de viaje asociado a un producto
    const travelBook = {
        TECH,
        EN,
        ES,
        FR,
        ProductoID
    };

    // Guardar el libro de viaje en la base de datos
    TravelBookProduct.create(travelBook)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algún error ocurrió al crear el libro de viaje asociado a un producto."
            });
        });
};

// Encontrar un libro de viaje por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    TravelBookProduct.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el libro de viaje asociado a un producto con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el libro de viaje asociado a un producto con ID=" + id
            });
        });
};

// Actualizar un libro de viaje por ID
exports.update = (req, res) => {
    const id = req.params.id;

    TravelBookProduct.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Libro de viaje asociado a un producto actualizado correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el libro de viaje asociado a un producto con ID=${id}. Tal vez no fue encontrado o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando el libro de viaje asociado a un producto con ID=" + id
        });
    });
};

// Eliminar un libro de viaje asociado a un producto por ID
exports.delete = (req, res) => {
    const id = req.params.id;

    TravelBookProduct.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Libro de viaje asociado a un producto eliminado correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar el libro de viaje asociado a un producto con ID=${id}. Tal vez no fue encontrado.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar el libro de viaje asociado a un producto con ID=" + id
        });
    });
};
