const db = require('../models');
const Miscellaneous = db.Miscellaneous;

// Crear y guardar un nuevo registro de Miscellaneous
exports.create = async (req, res) => {
    if (!req.body.time_zone) {
        res.status(400).send({
            message: "La zona horaria no puede estar vacía!"
        });
        return;
    }

    const miscellaneous = {
        time_zone: req.body.time_zone,
        default_first_date: req.body.default_first_date,
        next_invoice_number: req.body.next_invoice_number,
        forget_unpaid_services_days: req.body.forget_unpaid_services_days,
        max_infant_age: req.body.max_infant_age,
        max_child_age: req.body.max_child_age
    };

    try {
        const data = await Miscellaneous.create(miscellaneous);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al crear el registro Miscellaneous."
        });
    }
};

// Recuperar todos los registros de Miscellaneous de la base de datos.
exports.findAll = (req, res) => {
    Miscellaneous.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los registros Miscellaneous."
            });
        });
};

// Encontrar un único registro de Miscellaneous por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Miscellaneous.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar Miscellaneous con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando Miscellaneous con id=" + id
            });
        });
};

// Actualizar un registro de Miscellaneous por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Miscellaneous.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Miscellaneous fue actualizado exitosamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar Miscellaneous con id=${id}. Tal vez el registro no fue encontrado o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando Miscellaneous con id=" + id
        });
    });
};

// Eliminar un registro de Miscellaneous con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Miscellaneous.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Miscellaneous fue eliminado exitosamente!"
            });
        } else {
            res.send({
                message: `No se pudo eliminar Miscellaneous con id=${id}. Tal vez el registro no fue encontrado.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar Miscellaneous con id=" + id
        });
    });
};

// Método para actualizar o insertar un registro de Miscellaneous
exports.upsert = async (req, res) => {
    const id = req.body.id; // Asumiendo que el cuerpo de la solicitud contiene un 'id'

    try {
        const [instance, created] = await Miscellaneous.upsert({
            id: id,
            time_zone: req.body.time_zone,
            default_first_date: req.body.default_first_date,
            next_invoice_number: req.body.next_invoice_number,
            forget_unpaid_services_days: req.body.forget_unpaid_services_days,
            max_infant_age: req.body.max_infant_age,
            max_child_age: req.body.max_child_age
        }, { returning: true });

        res.send({
            message: created ? "Miscellaneous creado exitosamente!" : "Miscellaneous actualizado exitosamente!",
            data: instance
        });
    } catch (err) {
        res.status(500).send({
            message: "Error al actualizar o crear Miscellaneous."
        });
    }
};

// Método para obtener el último registro de Miscellaneous
exports.findLatest = (req, res) => {
    Miscellaneous.findOne({
        order: [['id', 'DESC']]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error al obtener el último registro de Miscellaneous."
        });
    });
};
