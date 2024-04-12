const db = require('../models');
const Website = db.Websites;

// Crear y guardar un nuevo Website
exports.create = async (req, res) => {
    if (!req.body.website_en) {
        res.status(400).send({
            message: "El contenido del website en inglés no puede estar vacío!"
        });
        return;
    }

    const website = {
        website_en: req.body.website_en,
        website_es: req.body.website_es,
        website_fr: req.body.website_fr
    };

    try {
        const data = await Website.create(website);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al crear el Website."
        });
    }
};

// Recuperar todos los Websites de la base de datos.
exports.findAll = (req, res) => {
    Website.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los websites."
            });
        });
};

// Encontrar un único Website por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Website.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Website con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Website con id=" + id
            });
        });
};

// Actualizar un Website por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Website.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Website actualizado exitosamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el Website con id=${id}. Tal vez el Website no fue encontrado o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando el Website con id=" + id
        });
    });
};

// Eliminar un Website con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Website.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Website eliminado exitosamente!"
            });
        } else {
            res.send({
                message: `No se pudo eliminar el Website con id=${id}. Tal vez el Website no fue encontrado.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar el Website con id=" + id
        });
    });
};

// Método para actualizar o insertar un Website
exports.upsert = async (req, res) => {
    const id = req.body.id; // Asumiendo que el cuerpo de la solicitud contiene un 'id'

    try {
        const [instance, created] = await Website.upsert({
            id: id,
            website_en: req.body.website_en,
            website_es: req.body.website_es,
            website_fr: req.body.website_fr
        }, { returning: true });

        res.send({
            message: created ? "Website creado exitosamente!" : "Website actualizado exitosamente!",
            data: instance
        });
    } catch (err) {
        res.status(500).send({
            message: "Error al actualizar o crear el Website."
        });
    }
};

// Método para obtener el último registro de Website
exports.findLatest = (req, res) => {
    Website.findOne({
        order: [['id', 'DESC']]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error al obtener el último Website."
        });
    });
};
