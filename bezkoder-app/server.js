require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Ruta al archivo swagger.js

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// Aumenta el límite de tamaño para los cuerpos de las solicitudes JSON
// y configuraciones para bodyParser antes de las líneas express.json() y express.urlencoded()
app.use(bodyParser.json({ limit: '50mb' })); // Ajusta según sea necesario
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// luego, estos son los bodyParser integrados de Express que probablemente no necesitas después de definir arriba
// pero si los mantienes, no serán afectados por la configuración de límite porque ya se ha configurado con body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// ... Otras importaciones y configuraciones ...

// Importa las nuevas rutas generadas
require("./app/routes/authentication.routes")(app);

require("./app/routes/AgenciasDeViajeInformacion.routes")(app);

require("./app/routes/AgenciasDeViaje.routes")(app);
require("./app/routes/Categorias.routes")(app);
require("./app/routes/DetallesReservas.routes")(app);
require("./app/routes/Geografia.routes")(app);
require("./app/routes/Paquetes.routes")(app);
require("./app/routes/Productos.routes")(app);
require("./app/routes/Proveedores.routes")(app);
require("./app/routes/Reservas.routes")(app);
require("./app/routes/Usuarios.routes")(app);
require("./app/routes/CreditosDebitos.routes")(app);
require("./app/routes/Facturas.routes")(app);
require("./app/routes/Gastos.routes")(app);
require("./app/routes/Grupo.routes")(app);
require("./app/routes/Ingresos.routes")(app);
require("./app/routes/Logistica.routes")(app);
require("./app/routes/Persona.routes")(app);
require("./app/routes/ProspectosVenta.routes")(app);
require("./app/routes/ProyectoVenta.routes")(app);
require("./app/routes/Tarifario.routes")(app);
require("./app/routes/s3.routes")(app);
require("./app/routes/Addresses.routes")(app);
require("./app/routes/ContactInfo.routes")(app);
require("./app/routes/Logos.routes")(app);
require("./app/routes/Miscellaneous.routes")(app);
require("./app/routes/Slogans.routes")(app);
require("./app/routes/TermsAndConditions.routes")(app);
require("./app/routes/Websites.routes")(app);
require("./app/routes/MetodosDePago.routes")(app);
require("./app/routes/ImpuestoAduana.routes")(app);
require("./app/routes/MetodosDePago.routes")(app);
require("./app/routes/PoliticasCancelacion.routes")(app);
require("./app/routes/Traduccion.routes")(app);
require("./app/routes/CreditosDebitos.routes")(app);
require("./app/routes/BancosDeProveedores.routes")(app);
require("./app/routes/CategoriasDeProveedores.routes")(app);
require("./app/routes/Paises.routes")(app);
require("./app/routes/Estados.routes")(app);
require("./app/routes/lugares.routes")(app);
require("./app/routes/ImagenesLugar.routes")(app);
require("./app/routes/translationNameProduct.routes")(app);
require("./app/routes/descriptionProduct.routes")(app);
require("./app/routes/travelBookProduct.routes")(app);
require("./app/routes/currency.routes")(app);
require("./app/routes/Costos.routes")(app);
require("./app/routes/Venta.routes")(app);
require("./app/routes/DetalleVenta.routes")(app);
require("./app/routes/Cliente.routes")(app);
require("./app/routes/contactos.routes")(app);
require("./app/routes/direcciones.routes")(app);
require("./app/routes/extranetClient.routes")(app);


require('./app/routes/parametrosCotizacion.routes')(app);
require('./app/routes/parametrosDocumentos.routes')(app);
require('./app/routes/parametrosEmails.routes')(app);

require("./app/routes/finanzas.routes.js")(app);
require("./app/routes/creditosDeudasDetalle.routes.js")(app);
require("./app/routes/cuentasBancarias.routes.js")(app);


require("./app/routes/metodoDePago.routes.js")(app);
require("./app/routes/parametrosFinanzas.routes.js")(app);
require("./app/routes/politicaDeCancelacion.routes.js")(app);
require("./app/routes/tipoDeTasa.routes.js")(app);

require("./app/routes/centrosFinancieros.routes")(app);
require("./app/routes/centrosFinancierosDefault.routes")(app);


require("./app/routes/estadosPago.routes")(app);

require("./app/routes/parametrosLogisticaGeneral.routes")(app);
require("./app/routes/centrosDeOperacion.routes")(app);

require("./app/routes/tareasAutomaticasLogistica.routes")(app);
require("./app/routes/estadoReservacion.routes")(app);
require('./app/routes/descripcionProducto.routes')(app);

require("./app/routes/productoInfos.routes")(app);
require("./app/routes/ProductoCostos.routes")(app);
require("./app/routes/ProductoTemporadas.routes")(app);
require("./app/routes/ProductoCostosAdicionales.routes")(app);
require("./app/routes/productoLogistica.routes")(app);
require("./app/routes/productoCupo.routes")(app);
require("./app/routes/productoAdmin.routes")(app);
require("./app/routes/proveedoresInfo.routes")(app);
require("./app/routes/ProveedoresContactos.routes")(app);

require("./app/routes/ProveedoresFinanzas.routes")(app);
require("./app/routes/CuentasBancariasProveedor.routes.js")(app);
// Importar rutas
require("./app/routes/ProveedoresLogistica.routes")(app);
require("./app/routes/ProveedoresDescripcionImagenes.routes")(app);
// Añadir esta línea donde se importan las rutas
require("./app/routes/TarifarioGeneral.routes")(app);

// Importar rutas
require('./app/routes/construccionViaje.routes')(app);
require('./app/routes/viajeProducto.routes')(app);

require("./app/routes/CotizacionesTarifario.routes")(app);
require("./app/routes/ParametrosCotizacionTarifario.routes")(app);
require("./app/routes/PreciosCalculadosTarifario.routes")(app);

require("./app/routes/construccionViaje.routes.js")(app);

require("./app/routes/cotizacionesPaquete.routes")(app);
require("./app/routes/parametrosCotizacionPaquete.routes.js")(app);
require("./app/routes/preciosCalculadosPaquete.routes.js")(app);
require("./app/routes/direccionAgenciaViaje.routes.js")(app);
require("./app/routes/CotizacionFinal.routes.js")(app);

require("./app/routes/Coverage.routes.js")(app);

require("./app/routes/AgenciaViajeContacto.routes.js")(app);





// ... Otras importaciones y configuraciones ...
// Ruta para servir la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
