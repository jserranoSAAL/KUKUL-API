const db = require("../models");
const ProspectoVenta = db.ProspectoVenta;

// Crear y guardar un nuevo Prospecto de Venta
exports.create = (req, res) => {
    // Validación
    if (!req.body.Proyecto) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un Prospecto de Venta
    const prospectoVenta = {
        Proyecto: req.body.Proyecto,
        Agencia: req.body.Agencia,
        Viaje: req.body.Viaje,
        Inicio: req.body.Inicio,
        Estado: req.body.Estado,
        EstadoDePago: req.body.EstadoDePago
    };

    // Guardar en la base de datos
    ProspectoVenta.create(prospectoVenta)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear el Prospecto de Venta."
            });
        });
};

// Métodos existentes...

// Obtener todos los Prospectos de Venta
exports.findAll = (req, res) => {
    ProspectoVenta.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los prospectos de venta."
            });
        });
};

// Obtener un Prospecto de Venta por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    ProspectoVenta.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Prospecto de Venta con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Prospecto de Venta con ID=" + id
            });
        });
};

// Actualizar un Prospecto de Venta por ID
exports.update = (req, res) => {
    const id = req.params.id;

    ProspectoVenta.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Prospecto de Venta actualizado correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el Prospecto de Venta con ID=${id}. Quizás el Prospecto de Venta no fue encontrado o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando el Prospecto de Venta con ID=" + id
        });
    });
};

// Eliminar un Prospecto de Venta por ID
exports.delete = (req, res) => {
    const id = req.params.id;

    ProspectoVenta.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Prospecto de Venta eliminado correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar el Prospecto de Venta con ID=${id}. Quizás el Prospecto de Venta no fue encontrado.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar el Prospecto de Venta con ID=" + id
        });
    });
};

