const db = require("../models");
const Persona = db.Persona;

// Crear y guardar una nueva Persona
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Nombre) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear una Persona
    const persona = {
        Apellidos: req.body.Apellidos,
        Nombre: req.body.Nombre,
        FechaDeNacimiento: req.body.FechaDeNacimiento,
        Email: req.body.Email,
        Pais: req.body.Pais,
        Acciones: req.body.Acciones
    };

    // Guardar Persona en la base de datos
    Persona.create(persona)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear la Persona."
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id;

    Persona.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Persona actualizada correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar la Persona con ID=${id}. Quizás la Persona no fue encontrada o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando la Persona con ID=" + id
        });
    });
};

// Eliminar una Persona
exports.delete = (req, res) => {
    const id = req.params.id;

    Persona.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Persona eliminada correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la Persona con ID=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la Persona con ID=" + id
        });
    });
};

// Encontrar una Persona por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Persona.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({ message: `No se encontró la Persona con ID=${id}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la Persona con ID=" + id
            });
        });
};

// Encontrar todas las Personas
exports.findAll = (req, res) => {
    Persona.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar las personas."
            });
        });
};


exports.findByName = (req, res) => {
    const nombre = req.params.nombre;

    Persona.findAll({
        where: {
            Nombre: {
                [db.Sequelize.Op.like]: `%${nombre}%`
            }
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Ocurrió algún error al buscar las personas con nombre similar a ${nombre}.`
        });
    });
};
