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
db.AgenciaDeViaje = require("./agenciaDeViaje.model.js")(sequelize, Sequelize);
db.Categorias = require("./categoria.model.js")(sequelize, Sequelize);
db.Geografia = require("./geografia.model.js")(sequelize, Sequelize);
db.CentroFinanciero = require("./centroFinanciero.model.js")(sequelize, Sequelize);
db.CreditosDebitos = require("./creditosDebitos.model.js")(sequelize, Sequelize);
db.Gastos = require("./gastos.model.js")(sequelize, Sequelize);
db.Grupo = require("./grupo.model.js")(sequelize, Sequelize);
db.Logistica = require("./logistica.model.js")(sequelize, Sequelize);
db.Facturas = require("./facturas.model.js")(sequelize, Sequelize);
db.Ingresos = require("./ingresos.model.js")(sequelize, Sequelize);
db.Personas = require("./personas.model.js")(sequelize, Sequelize);
db.ProspectoVenta = require("./prospectoVenta.model.js")(sequelize, Sequelize);
db.ProyectoVenta = require("./proyectoVenta.model.js")(sequelize, Sequelize);
db.Tarifario = require("./tarifario.model.js")(sequelize, Sequelize);
db.Addresses = require("./addresses.model.js")(sequelize, Sequelize);
db.ContactInfo = require("./contactInfo.model.js")(sequelize, Sequelize);
db.Logos = require("./logos.model.js")(sequelize, Sequelize);
db.Websites = require("./websites.model.js")(sequelize, Sequelize);
db.Slogans = require("./slogans.model.js")(sequelize, Sequelize);
db.TermsAndConditions = require("./termsAndConditions.model.js")(sequelize, Sequelize);
db.Miscellaneous = require("./miscellaneous.model.js")(sequelize, Sequelize);
db.MetodosDePago = require("./metodosPago.model.js")(sequelize, Sequelize);
db.PoliticasCancelacion = require("./politicasCancelacion.model.js")(sequelize, Sequelize);
db.Traduccion = require("./traduccion.model.js")(sequelize, Sequelize);
db.ImpuestoAduana = require("./impuestoAduana.model.js")(sequelize, Sequelize);
db.CreditosDebitosProveedores = require("./creditosDebitos.model.js")(sequelize, Sequelize);
db.BancosDeProveedores = require("./bancosDeProveedores.model.js")(sequelize, Sequelize);
db.CategoriasDeProveedores = require("./CategoriasDeProveedores.model.js")(sequelize, Sequelize);
db.Pais = require("./paises.model.js")(sequelize, Sequelize);
db.Estado = require("./estado.model.js")(sequelize, Sequelize);
db.Lugares = require("./lugar.model.js")(sequelize, Sequelize);
db.ImagenesLugar = require("./imagenesLugar.model.js")(sequelize, Sequelize);
db.TranslationNameProduct = require("./translationNameProduct.model.js")(sequelize, Sequelize);
db.DescriptionProduct = require("./descriptionProduct.model.js")(sequelize, Sequelize);
db.TravelBookProduct = require("./travelBookProduct.model.js")(sequelize, Sequelize);
db.Currency = require("./currency.model.js")(sequelize, Sequelize);
db.Costos = require("./costos.model.js")(sequelize, Sequelize);
db.Venta = require("./venta.model.js")(sequelize, Sequelize);
db.DetalleVenta = require("./detalleVenta.model.js")(sequelize, Sequelize);


// Aquí podrías definir las relaciones entre modelos si es necesario
db.Usuarios.hasMany(db.Reservas, { foreignKey: 'UsuarioID' });
db.Reservas.belongsTo(db.Usuarios, { foreignKey: 'UsuarioID' });

db.Paquetes.hasMany(db.DetallesReservas, { foreignKey: 'PaqueteID' });
db.DetallesReservas.belongsTo(db.Paquetes, { foreignKey: 'PaqueteID' });

// Continuar definiendo otras relaciones
// Agrega aquí cualquier relación nueva necesaria entre los modelos recién añadidos

module.exports = db;
