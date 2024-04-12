const db = require('../models');
const Slogan = db.Slogans;

// Crear y guardar un nuevo Slogan
exports.create = async (req, res) => {
    if (!req.body.slogan_en) {
        res.status(400).send({
            message: "El contenido del slogan no puede estar vacío!"
        });
        return;
    }

    const slogan = {
        slogan_en: req.body.slogan_en,
        slogan_es: req.body.slogan_es,
        slogan_fr: req.body.slogan_fr
    };

    try {
        const data = await Slogan.create(slogan);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al crear el Slogan."
        });
    }
};

// Recuperar todos los Slogans de la base de datos.
exports.findAll = (req, res) => {
    Slogan.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los slogans."
            });
        });
};

// Encontrar un único Slogan por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Slogan.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Slogan con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Slogan con id=" + id
            });
        });
};

// Actualizar un Slogan por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Slogan.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Slogan actualizado exitosamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el Slogan con id=${id}. Tal vez el Slogan no fue encontrado o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando el Slogan con id=" + id
        });
    });
};

// Eliminar un Slogan con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Slogan.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Slogan eliminado exitosamente!"
            });
        } else {
            res.send({
                message: `No se pudo eliminar el Slogan con id=${id}. Tal vez el Slogan no fue encontrado.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar el Slogan con id=" + id
        });
    });
};

// Método para actualizar o insertar un Slogan
exports.upsert = async (req, res) => {
    const { slogan_en, slogan_es, slogan_fr } = req.body;

    try {
        // Verifica si ya existe algún registro en la tabla
        const existingSlogan = await Slogan.findOne();

        if (existingSlogan) {
            // Si existe, actualiza el registro existente
            const updated = await Slogan.update({
                slogan_en: slogan_en,
                slogan_es: slogan_es,
                slogan_fr: slogan_fr
            }, {
                where: { id: existingSlogan.id }
            });

            if (updated[0] > 0) {
                const updatedSlogan = await Slogan.findByPk(existingSlogan.id);
                res.send({
                    message: "Slogan actualizado exitosamente!",
                    data: updatedSlogan
                });
            } else {
                res.status(500).send({
                    message: "Error al actualizar el Slogan existente."
                });
            }
        } else {
            // Si no hay registros existentes, crea un nuevo registro
            const newSlogan = await Slogan.create({
                slogan_en: slogan_en,
                slogan_es: slogan_es,
                slogan_fr: slogan_fr
            });
            res.send({
                message: "Slogan creado exitosamente!",
                data: newSlogan
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error al procesar la solicitud de Slogan: " + err.message
        });
    }
};


// Método para obtener el último registro de Slogan
exports.findLatest = (req, res) => {
    Slogan.findOne({
        order: [['id', 'DESC']]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error al obtener el último Slogan."
        });
    });
};
