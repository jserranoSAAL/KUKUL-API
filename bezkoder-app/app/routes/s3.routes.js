module.exports = app => {
    const s3Controller = require("../controllers/s3.controller");    
    const s3Router = require("express").Router();
        // Rutas para Paquetes    
    const { requireAuth } = require("../middlewares/auth");    

    

    // Rutas para Paquetes con Middleware de Autenticación
    s3Router.post('/upload-images', requireAuth, s3Controller.uploadImages);        

    app.use("/api/s3", s3Router);
};
