// models/PoliticaDeCancelacion.js
module.exports = (sequelize, DataTypes) => {
    const PoliticaDeCancelacion = sequelize.define('PoliticaDeCancelacion', {
      De: DataTypes.INTEGER,
      A: DataTypes.INTEGER,
      PorcentajeConservacion: DataTypes.DECIMAL,
      ParametrosFinanzasID: DataTypes.INTEGER
    });
  
    PoliticaDeCancelacion.associate = function(models) {
      PoliticaDeCancelacion.belongsTo(models.ParametrosFinanzas, { foreignKey: 'ParametrosFinanzasID' });
    };
  
    return PoliticaDeCancelacion;
  };
  