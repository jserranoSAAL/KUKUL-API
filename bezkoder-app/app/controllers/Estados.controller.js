const db = require('../models');
const Estado = db.Estado;

// Obtener todos los estados
exports.findAll = (req, res) => {
    Estado.findAll()
        .then(estados => {
            res.json(estados);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los estados."
            });
        });
};

// Crear y guardar un nuevo estado
exports.create = (req, res) => {
    // Validar solicitud
    if (!req.body.Nombre || !req.body.PaisID) {
        res.status(400).send({
            message: "Todos los campos son requeridos!"
        });
        return;
    }

    // Crear un estado
    const estado = {
        Nombre: req.body.Nombre,
        PaisID: req.body.PaisID
    };

    // Guardar el estado en la base de datos
    Estado.create(estado)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algún error ocurrió al crear el estado."
            });
        });
};

// Encontrar un estado por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Estado.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el estado con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el estado con ID=" + id
            });
        });
};

// Actualizar un estado por su ID
exports.update = (req, res) => {
    const id = req.params.id;

    Estado.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Estado actualizado correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el estado con ID=${id}. Tal vez el estado no fue encontrado o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando el estado con ID=" + id
        });
    });
};

// Eliminar un estado por su ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Estado.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Estado eliminado correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar el estado con ID=${id}. Tal vez el estado no fue encontrado.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar el estado con ID=" + id
        });
    });
};
