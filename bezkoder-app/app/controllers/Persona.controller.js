const db = require("../models");
const Persona = db.Persona;

// Crear y guardar una nueva Persona
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Nombre) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear una Persona
    const persona = {
        Apellidos: req.body.Apellidos,
        Nombre: req.body.Nombre,
        FechaDeNacimiento: req.body.FechaDeNacimiento,
        Email: req.body.Email,
        Pais: req.body.Pais,
        Acciones: req.body.Acciones
    };

    // Guardar Persona en la base de datos
    Persona.create(persona)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear la Persona."
            });
        });
};

// Otros métodos como update, delete, findAll, findOne, etc.
