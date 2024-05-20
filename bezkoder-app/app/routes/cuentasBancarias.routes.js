module.exports = app => {
    const cuentasBancariasController = require("../controllers/cuentasBancarias.controller.js");
    const { requireAuth } = require("../middlewares/auth");
  
    const cuentasBancariasRouter = require("express").Router();
  
    // Crear un nuevo registro de CuentasBancarias
    cuentasBancariasRouter.post("/", requireAuth, cuentasBancariasController.create);
  
    // Recuperar todos los registros de CuentasBancarias
    cuentasBancariasRouter.get("/", requireAuth, cuentasBancariasController.findAll);
  
    // Recuperar un único registro de CuentasBancarias con AgenciasDeViajeID
    cuentasBancariasRouter.get("/:AgenciasDeViajeID", requireAuth, cuentasBancariasController.findOne);
  
    // Actualizar un registro de CuentasBancarias con AgenciasDeViajeID
    cuentasBancariasRouter.put("/:AgenciasDeViajeID", requireAuth, cuentasBancariasController.update);
  
    // Eliminar un registro de CuentasBancarias con AgenciasDeViajeID
    cuentasBancariasRouter.delete("/:AgenciasDeViajeID", requireAuth, cuentasBancariasController.delete);
  
    // Montar el enrutador bajo la ruta /api/cuentasBancarias
    app.use("/api/cuentasBancarias", cuentasBancariasRouter);
  };
  