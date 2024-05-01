const express = require("express");
const router = express.Router();
const categoriasDeProveedoresController = require("../controllers/categoriasDeProveedores.controller");
const { requireAuth } = require("../middlewares/auth");

// Rutas para Categorías de Proveedores con autenticación requerida
router.post("/", requireAuth, categoriasDeProveedoresController.create); // Crear una nueva categoría
router.get("/", requireAuth, categoriasDeProveedoresController.findAll); // Obtener todas las categorías
router.get("/:id", requireAuth, categoriasDeProveedoresController.findOne); // Obtener una categoría por su ID
router.put("/:id", requireAuth, categoriasDeProveedoresController.update); // Actualizar una categoría por su ID
router.delete("/:id", requireAuth, categoriasDeProveedoresController.delete); // Eliminar una categoría por su ID

module.exports = router;
