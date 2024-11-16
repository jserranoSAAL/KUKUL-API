const db = require('../models');
const Paquete = db.Paquetes;
const Grupo = db.Grupo; 
const Cliente = db.Cliente;

const { Op } = require('sequelize');

// Obtener todos los paquetes
exports.findAll = (req, res) => {
    Paquete.findAll()
        .then(paquetes => {
            res.json(paquetes);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los paquetes."
            });
        });
};

// Crear un nuevo paquete
// Crear un nuevo paquete
exports.create = (req, res) => {
    if (!req.body.Nombre || !req.body.Categoria || !req.body.Estado) {
        res.status(400).send({ message: "El contenido no puede estar vacío." });
        return;
    }

    const paquete = {
        Nombre: req.body.Nombre,
        Categoria: req.body.Categoria,
        Estado: req.body.Estado,
        Codigo: req.body.Codigo,
        Inicio: req.body.Inicio,
        Fin: req.body.Fin,
        Creador: req.body.Creador,
        TipoDeViaje: req.body.TipoDeViaje,
        Etiquetas: req.body.Etiquetas,
        Nivel: req.body.Nivel,
        Traducciones: req.body.Traducciones,
        Imagenes: req.body.Imagenes,
        NotasInternas: req.body.NotasInternas,
        GrupoId: req.body.GrupoId // Referencia al grupo
    };

    Paquete.create(paquete)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algún error ocurrió al crear el paquete."
            });
        });
};

// Obtener un paquete por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Paquete.findByPk(id)
        .then(async data => {
            if (data) {
                const clients = await  Cliente.findAll({where: { IdGrupo:data.GrupoId}});

                for(let c in clients){
                    
                }
                res.send(clients);
            } else {
                res.status(404).send({ message: `No se encontró el paquete con ID=${id}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el paquete con ID=" + id
            });
        });
};

// Actualizar un paquete por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Paquete.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Paquete actualizado correctamente." });
            } else {
                res.send({ message: `No se puede actualizar el paquete con ID=${id}. Quizás el paquete no fue encontrado o req.body está vacío.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el paquete con ID=" + id
            });
        });
};

// Eliminar un paquete por ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Paquete.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Paquete eliminado correctamente." });
            } else {
                res.send({ message: `No se pudo eliminar el paquete con ID=${id}. Quizás el paquete no fue encontrado.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el paquete con ID=" + id
            });
        });
};

// Buscar paquetes por nombre
exports.findByName = (req, res) => {
    const nombre = req.params.nombre;

    Paquete.findAll({
        where: {
            Nombre: {
                [Op.like]: `%${nombre}%` // Utiliza LIKE para búsqueda parcial
            }
        }
    })
        .then(data => {
            if (data.length) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontraron paquetes con el nombre similar a ${nombre}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error buscando el paquete con nombre=" + nombre
            });
        });
};

// Obtener el grupo asociado a un paquete por ID de paquete
exports.findGroupByPackageId = (req, res) => {
    const id = req.params.id;

    Paquete.findByPk(id)
    .then(data => {
        if (data) {
            Grupo.findByPk(data.GrupoId).then(data2 =>{
                if (data2){
                    res.send(data2);
                }else {
                    res.status(404).send({ message: `No se encontró el grupo asociado al paquete con ID=${id}.` });
                }
            })            
        } else {
            res.status(404).send({ message: `No se encontró el paquete con ID=${id}.` });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error recuperando el grupo asociado al paquete con ID=" + id + " error:" + err
        });
    });
};