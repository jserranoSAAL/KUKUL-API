module.exports = (sequelize, DataTypes) => {
  const Finanzas = sequelize.define("Finanzas", {
      ID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      AgenciasDeViajeID: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      CentroFinancieroIngresos: {
          type: DataTypes.STRING
      },
      PlantillaFactura: {
          type: DataTypes.STRING
      },
      CentroFinancieroPagos: {
          type: DataTypes.STRING
      },
      TemplateProforma: {
          type: DataTypes.STRING
      },
      CategoriaIngreso: {
          type: DataTypes.STRING
      },
      MetodoPago: {
          type: DataTypes.STRING
      },
      PagoAPartirDe: {
          type: DataTypes.INTEGER
      },
      Deposito: {
          type: DataTypes.DECIMAL(10, 2)
      },
      Saldo: {
          type: DataTypes.INTEGER
      }
  }, {
      tableName: "Finanzas",
      timestamps: false
  });

  Finanzas.associate = models => {
      Finanzas.belongsTo(models.AgenciasDeViaje, {
          foreignKey: 'AgenciasDeViajeID',
          as: 'agencia'
      });
  };

  return Finanzas;
};
