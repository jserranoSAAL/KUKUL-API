const db = require('../models');
const AgenciaDeViaje = db.AgenciasDeViaje;

// Obtener todas las agencias de viaje
exports.findAll = (req, res) => {
    AgenciaDeViaje.findAll()
        .then(agenciasDeViaje => {
            res.json(agenciasDeViaje);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar las agencias de viaje."
            });
        });
};

// Crear y guardar una nueva agencia de viaje
exports.create = (req, res) => {
    // Validar solicitud
    if (!req.body.Nombre) {
        res.status(400).send({
            message: "El contenido no puede estar vacío!"
        });
        return;
    }

    // Crear una agencia de viaje
    const agencia = {
        Nombre: req.body.Nombre,
        Contacto: req.body.Contacto,
        Telefono: req.body.Telefono,
        CorreoElectronico: req.body.CorreoElectronico
    };

    // Guardar AgenciaDeViaje en la base de datos
    AgenciaDeViaje.create(agencia)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algún error ocurrió al crear la agencia de viaje."
            });
        });
};

// Encontrar una agencia de viaje por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    AgenciaDeViaje.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar la AgenciaDeViaje con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la AgenciaDeViaje con ID=" + id
            });
        });
};

// Actualizar una agencia de viaje por ID
exports.update = (req, res) => {
    const id = req.params.id;

    AgenciaDeViaje.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "AgenciaDeViaje actualizada correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar la AgenciaDeViaje con ID=${id}. Tal vez la AgenciaDeViaje no fue encontrada o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando la AgenciaDeViaje con ID=" + id
        });
    });
};

// Eliminar una agencia de viaje con el ID especificado
exports.delete = (req, res) => {
    const id = req.params.id;

    AgenciaDeViaje.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "AgenciaDeViaje eliminada correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la AgenciaDeViaje con ID=${id}. Tal vez la AgenciaDeViaje no fue encontrada.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la AgenciaDeViaje con ID=" + id
        });
    });
};
