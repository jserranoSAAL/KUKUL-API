const db = require('../models');
const Usuario = db.Usuarios;
const bcrypt = require('bcrypt');


// Métodos de controlador para Usuarios
// Ejemplo: Obtener todos los usuarios
exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los usuarios."
            });
        });
};

exports.updateRole = (req, res) => {
    const id = req.params.id;
    Usuario.update({ Rol: req.body.Rol }, { where: { ID: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "El rol del usuario fue actualizado exitosamente." });
            } else {
                res.send({ message: `No se pudo actualizar el rol del usuario con id=${id}. Tal vez el usuario no fue encontrado o req.body está vacío.` });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error actualizando el rol del Usuario con id=" + id });
        });
};


// Crear y guardar un nuevo Usuario
exports.create = async (req, res) => {
    // Validar solicitud
    if (!req.body.username || !req.body.email || !req.body.password_hash) {
        return res.status(400).send({
            message: "El contenido no puede estar vacío!"
        });
    }

    try {
        // Encriptar contraseña
        const hashedPassword = await bcrypt.hash(req.body.password_hash, 10);

        // Crear un Usuario
        const usuario = {
            username: req.body.username,
            name_user: req.body.name_user,
            last_name_user: req.body.last_name_user,
            email: req.body.email,
            password_hash: hashedPassword, // Usar contraseña hasheada
            rol: req.body.rol
        };

        // Guardar Usuario en la base de datos
        const data = await Usuario.create(usuario);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al crear el Usuario."
        });
    }
};

// Recuperar todos los Usuarios de la base de datos
exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió algún error al recuperar los usuarios."
            });
        });
};

// Encontrar un único Usuario con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Usuario con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Usuario con id=" + id
            });
        });
};

// Actualizar un Usuario por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Usuario.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Usuario fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Usuario con id=${id}. Tal vez el Usuario no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Usuario con id=" + id
            });
        });
};

// Eliminar un Usuario con el id especificado
exports.delete = (req, res) => {
    const id = req.params.id;

    Usuario.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Usuario fue eliminado exitosamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Usuario con id=${id}. Tal vez el Usuario no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Usuario con id=" + id
            });
        });
};
// Agrega aquí otros métodos según sea necesario
exports.findByName = (req, res) => {
    const name_user = req.params.name_user;

    Usuario.findAll({
        where: {
            name_user: {
                [db.Sequelize.Op.like]: `%${name_user}%`
            }
        }
    })
    .then(data => {
        if (data.length) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontraron usuarios con nombre similar a ${name_user}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al buscar los usuarios."
        });
    });
};
