require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

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
require("./app/routes/AgenciasDeViaje.routes")(app);
require("./app/routes/Categorias.routes")(app);
require("./app/routes/DetallesReservas.routes")(app);
require("./app/routes/Geografia.routes")(app);
require("./app/routes/Paquetes.routes")(app);
require("./app/routes/Productos.routes")(app);
require("./app/routes/Proveedores.routes")(app);
require("./app/routes/Reservas.routes")(app);
require("./app/routes/Usuarios.routes")(app);

// ... Otras importaciones y configuraciones ...



// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
