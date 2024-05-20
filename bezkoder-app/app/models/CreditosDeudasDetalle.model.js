module.exports = (sequelize, DataTypes) => {
    const CreditosDeudasDetalle = sequelize.define("CreditosDeudasDetalle", {
      Fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Grupo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      Moneda: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Tasa: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      },
      ValorRef: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      FechaPago: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Hecho: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      Comentarios: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    CreditosDeudasDetalle.associate = (models) => {
      CreditosDeudasDetalle.belongsTo(models.Finanzas, {
        foreignKey: "FinanzasId",
        as: "Finanzas",
      });
    };
  
    return CreditosDeudasDetalle;
  };
  