module.exports = (sequelize, DataTypes) => {
  const CreditosDeudasDetalle = sequelize.define("CreditosDeudasDetalle", {
      ID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      AgenciasDeViajeID: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      Fecha: {
          type: DataTypes.DATE
      },
      Grupo: {
          type: DataTypes.STRING
      },
      Valor: {
          type: DataTypes.DECIMAL(10, 2)
      },
      Moneda: {
          type: DataTypes.STRING(10)
      },
      Tasa: {
          type: DataTypes.DECIMAL(5, 2)
      },
      ValorRef: {
          type: DataTypes.DECIMAL(10, 2)
      },
      FechaPago: {
          type: DataTypes.DATE
      },
      Hecho: {
          type: DataTypes.BOOLEAN
      },
      Comentarios: {
          type: DataTypes.TEXT
      }
  }, {
      tableName: "CreditosDeudasDetalle",
      timestamps: false
  });

  CreditosDeudasDetalle.associate = models => {
      CreditosDeudasDetalle.belongsTo(models.AgenciasDeViaje, {
          foreignKey: 'AgenciasDeViajeID',
          as: 'agencia'
      });
  };

  return CreditosDeudasDetalle;
};
