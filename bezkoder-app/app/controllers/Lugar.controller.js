const db = require('../models');
const Lugar = db.Lugares;

// Obtener todos los lugares
exports.findAll = (req, res) => {
    Lugar.findAll()
        .then(lugares => {
            res.json(lugares);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los lugares."
            });
        });
};

// Crear y guardar un nuevo lugar
exports.create = (req, res) => {
    // Validar solicitud
    if (!req.body.Nombre || !req.body.EstadoID) {
        res.status(400).send({
            message: "El nombre y el ID del estado son requeridos."
        });
        return;
    }

    // Crear un lugar
    const lugar = {
        CodigoLenguaje: req.body.CodigoLenguaje,
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        Latitud: req.body.Latitud,
        Longitud: req.body.Longitud,
        EstadoID: req.body.EstadoID
    };

    // Guardar el lugar en la base de datos
    Lugar.create(lugar)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al crear el lugar."
            });
        });
};

// Encontrar un lugar por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Lugar.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el lugar con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el lugar con ID=" + id
            });
        });
};

// Actualizar un lugar por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Lugar.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Lugar actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el lugar con ID=${id}. Tal vez el lugar no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el lugar con ID=" + id
            });
        });
};

// Eliminar un lugar con el ID especificado
exports.delete = (req, res) => {
    const id = req.params.id;

    Lugar.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Lugar eliminado correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el lugar con ID=${id}. Tal vez el lugar no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el lugar con ID=" + id
            });
        });
};
