const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar los modelos
db.Usuarios = require("./usuario.model.js")(sequelize, Sequelize);
db.Reservas = require("./reserva.model.js")(sequelize, Sequelize);
db.Paquetes = require("./paquete.model.js")(sequelize, Sequelize);
db.DetallesReservas = require("./detallesReserva.model.js")(sequelize, Sequelize);
db.Proveedores = require("./proveedor.model.js")(sequelize, Sequelize);
db.Productos = require("./producto.model.js")(sequelize, Sequelize);
db.AgenciasDeViaje = require("./agenciaDeViaje.model.js")(sequelize, Sequelize);
db.Categorias = require("./categoria.model.js")(sequelize, Sequelize);
db.Geografia = require("./geografia.model.js")(sequelize, Sequelize);

// Aquí podrías definir las relaciones entre modelos si es necesario
// Por ejemplo, si Usuarios tiene muchas Reservas
db.Usuarios.hasMany(db.Reservas, { foreignKey: 'UsuarioID' });
db.Reservas.belongsTo(db.Usuarios, { foreignKey: 'UsuarioID' });

// Relaciones para Paquetes y Detalles de Reservas (ejemplo)
db.Paquetes.hasMany(db.DetallesReservas, { foreignKey: 'PaqueteID' });
db.DetallesReservas.belongsTo(db.Paquetes, { foreignKey: 'PaqueteID' });

// Continuar definiendo otras relaciones

module.exports = db;
