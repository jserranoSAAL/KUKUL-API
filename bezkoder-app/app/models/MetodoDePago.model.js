// models/MetodoDePago.js
module.exports = (sequelize, DataTypes) => {
  const MetodoDePago = sequelize.define("MetodoDePago", {
    Nombre: DataTypes.STRING,
    Comision: DataTypes.DECIMAL,
    PorDefecto: DataTypes.BOOLEAN,
    ParametrosFinanzasID: DataTypes.INTEGER,
  });

  MetodoDePago.associate = function (models) {
    MetodoDePago.belongsTo(models.ParametrosFinanzas, {
      foreignKey: "ParametrosFinanzasID",
    });
  };

  return MetodoDePago;
};
