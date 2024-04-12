const db = require('../models');
const ContactInfo = db.ContactInfo;

// Crear y Guardar nuevo ContactInfo
exports.create = async (req, res) => {
    if (!req.body.email) {
        res.status(400).send({
            message: "El email no puede estar vacío!"
        });
        return;
    }

    const contactInfo = {
        email: req.body.email,
        phone: req.body.phone,
        skype_contact: req.body.skype_contact,
        chat1: req.body.chat1,
        chat2: req.body.chat2
    };

    try {
        const data = await ContactInfo.create(contactInfo);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al crear el ContactInfo."
        });
    }
};

// Recuperar todos los ContactInfos de la base de datos.
exports.findAll = (req, res) => {
    ContactInfo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los ContactInfos."
            });
        });
};

// Encontrar un único ContactInfo con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ContactInfo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar ContactInfo con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando ContactInfo con id=" + id
            });
        });
};

// Actualizar un ContactInfo por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    ContactInfo.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "ContactInfo fue actualizado exitosamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar ContactInfo con id=${id}. Tal vez ContactInfo no fue encontrado o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando ContactInfo con id=" + id
            });
    });
};

// Eliminar un ContactInfo con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    ContactInfo.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "ContactInfo fue eliminado exitosamente!"
            });
        } else {
            res.send({
                message: `No se pudo eliminar ContactInfo con id=${id}. Tal vez ContactInfo no fue encontrado.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar ContactInfo con id=" + id
        });
    });
};

// Método para actualizar o insertar un ContactInfo
exports.upsert = async (req, res) => {
    const id = req.body.id; // Asumiendo que el cuerpo de la solicitud contiene un 'id'

    try {
        const [instance, created] = await ContactInfo.upsert({
            id: id,
            email: req.body.email,
            phone: req.body.phone,
            skype_contact: req.body.skype_contact,
            chat1: req.body.chat1,
            chat2: req.body.chat2
        }, { returning: true });

        res.send({
            message: created ? "ContactInfo creado exitosamente!" : "ContactInfo actualizado exitosamente!",
            data: instance
        });
    } catch (err) {
        res.status(500).send({
            message: "Error al actualizar o crear ContactInfo."
        });
    }
};

// Método para obtener el último registro de ContactInfo
exports.findLatest = (req, res) => {
    ContactInfo.findOne({
        order: [['id', 'DESC']]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error al obtener el último ContactInfo."
        });
    });
};
