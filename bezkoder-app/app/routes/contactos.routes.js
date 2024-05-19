// app/routes/contactos.routes.js

module.exports = (app) => {
    const contactosController = require("../controllers/contactos.controller");
    const { requireAuth } = require("../middlewares/auth");

    const contactosRouter = require("express").Router();

    // Crear un nuevo Contacto
    contactosRouter.post("/", requireAuth, contactosController.create);

    // Obtener todos los Contactos
    contactosRouter.get("/", requireAuth, contactosController.findAll);

    // Obtener un Contacto por ID
    contactosRouter.get("/:id", requireAuth, contactosController.findOne);

    // Actualizar un Contacto por ID
    contactosRouter.put("/:id", requireAuth, contactosController.update);

    // Eliminar un Contacto por ID
    contactosRouter.delete("/:id", requireAuth, contactosController.delete);

    app.use("/api/contactos", contactosRouter);
};
