const swaggerJSDoc = require('swagger-jsdoc');

// Configuración básica de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Kukul API',
      description: 'Este es el API del sistema de gestion de la agencia de viajes de kukul',
      contact: {
        name: 'Tu nombre',
        email: 'tu@email.com'
      },
      servers: ['http://localhost:8080', 'http://54.88.119.103:8080'] // Cambia esto según tu configuración
    }
  },
  // Rutas a los archivos que contienen las rutas de tu API
  apis: ['./app/routes/*.js', './app/controllers/*.js']
};

// Inicializar Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
