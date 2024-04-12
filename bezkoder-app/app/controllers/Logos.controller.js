const db = require('../models');
const Logo = db.Logos;

// Crear y guardar un nuevo Logo
exports.create = async (req, res) => {
    if (!req.body.file_path) {
        res.status(400).send({
            message: "La ruta del archivo no puede estar vacía!"
        });
        return;
    }

    const logo = {
        file_path: req.body.file_path
    };

    try {
        const data = await Logo.create(logo);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al crear el logo."
        });
    }
};

// Recuperar todos los Logos de la base de datos
exports.findAll = (req, res) => {
    Logo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los logos."
            });
        });
};

// Encontrar un único Logo por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Logo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Logo con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Logo con id=" + id
            });
        });
};

// Actualizar un Logo por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Logo.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Logo actualizado exitosamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el Logo con id=${id}. Tal vez el Logo no fue encontrado o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando el Logo con id=" + id
        });
    });
};

// Eliminar un Logo con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Logo.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Logo eliminado exitosamente!"
            });
        } else {
            res.send({
                message: `No se pudo eliminar el Logo con id=${id}. Tal vez el Logo no fue encontrado.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar el Logo con id=" + id
        });
    });
};

// Método para actualizar o insertar un Logo
exports.upsert = async (req, res) => {
    const id = req.body.id; // Asumiendo que el cuerpo de la solicitud contiene un 'id'

    try {
        const [instance, created] = await Logo.upsert({
            id: id,
            file_path: req.body.file_path
        }, { returning: true });

        res.send({
            message: created ? "Logo creado exitosamente!" : "Logo actualizado exitosamente!",
            data: instance
        });
    } catch (err) {
        res.status(500).send({
            message: "Error al actualizar o crear el Logo."
        });
    }
};

// Método para obtener el último registro de logos
exports.findLatest = (req, res) => {
    Logo.findOne({
        order: [['id', 'DESC']]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error al obtener el último Logo."
        });
    });
};
