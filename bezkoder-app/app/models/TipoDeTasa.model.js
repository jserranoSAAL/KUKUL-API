// models/TipoDeTasa.js
module.exports = (sequelize, DataTypes) => {
  const TipoDeTasa = sequelize.define("TipoDeTasa", {
    Nombre: DataTypes.STRING,
    Formula: DataTypes.STRING,
    ParametrosFinanzasID: DataTypes.INTEGER,
  });

  TipoDeTasa.associate = function (models) {
    TipoDeTasa.belongsTo(models.ParametrosFinanzas, {
      foreignKey: "ParametrosFinanzasID",
    });
  };

  return TipoDeTasa;
};
