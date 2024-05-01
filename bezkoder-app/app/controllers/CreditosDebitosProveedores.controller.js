const db = require('../models');
const Categoria = db.Categoria;

// Método para crear una nueva categoría
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.nombre) {
        res.status(400).send({
            message: "El nombre de la categoría es requerido."
        });
        return;
    }

    // Crear una categoría
    const categoria = {
        nombre: req.body.nombre
    };

    // Guardar la categoría en la base de datos
    Categoria.create(categoria)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la categoría."
            });
        });
};

// Método para buscar una categoría por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Categoria.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró una categoría con el ID ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al buscar la categoría con el ID ${id}: ${err.message}`
            });
        });
};

// Método para actualizar una categoría por su ID
exports.update = (req, res) => {
    const id = req.params.id;

    Categoria.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categoría actualizada exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar la categoría con ID=${id}. ¡Quizás la categoría no fue encontrada o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al actualizar la categoría con ID=${id}: ${err.message}`
            });
        });
};

// Método para eliminar una categoría por su ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Categoria.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categoría eliminada exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede eliminar la categoría con ID=${id}. ¡Quizás la categoría no fue encontrada!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error al eliminar la categoría con ID=${id}: ${err.message}`
            });
        });
};

// Método para obtener todas las categorías
exports.findAll = (req, res) => {
    Categoria.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar las categorías."
            });
        });
};

// Método para buscar categorías por nombre (con operador LIKE)
exports.findByName = (req, res) => {
    const nombre = req.params.nombre;

    Categoria.findAll({
        where: {
            nombre: {
                [db.Sequelize.Op.like]: `%${nombre}%`
            }
        }
    })
        .then(data => {
            if (data.length) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontraron categorías con nombre similar a ${nombre}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al buscar las categorías por nombre."
            });
        });
};
