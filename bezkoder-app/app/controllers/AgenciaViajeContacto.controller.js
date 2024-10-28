const db = require('../models');
const AgenciaViajeContacto = db.AgenciaViajeContacto;

// Obtener contactos por ID de agencia
exports.findAllByAgencia = (req, res) => {
    const agenciaId = req.params.agenciaId;

    AgenciaViajeContacto.findAll({ where: { AgenciasDeViajeID: agenciaId } })
        .then(contactos => {
            res.json(contactos);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los contactos."
            });
        });
};

// Crear y guardar un nuevo contacto
exports.create = (req, res) => {
    if (!req.body.Nombre || !req.body.Apellidos) {
        res.status(400).send({
            message: "El nombre y los apellidos del contacto no pueden estar vacíos!"
        });
        return;
    }

    const contacto = {
        Nombre: req.body.Nombre,
        Apellidos: req.body.Apellidos,
        PorDefecto: req.body.PorDefecto || false,
        Email: req.body.Email,
        Telefono: req.body.Telefono,
        AgenciasDeViajeID: req.body.AgenciasDeViajeID
    };

    AgenciaViajeContacto.create(contacto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al crear el contacto."
            });
        });
};

// Actualizar un contacto por ID
exports.update = (req, res) => {
    const id = req.params.id;

    AgenciaViajeContacto.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Contacto actualizado correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el contacto con ID=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando el contacto con ID=" + id
        });
    });
};

// Eliminar un contacto por ID
exports.delete = (req, res) => {
    const id = req.params.id;

    AgenciaViajeContacto.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Contacto eliminado correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar el contacto con ID=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar el contacto con ID=" + id
        });
    });
};
