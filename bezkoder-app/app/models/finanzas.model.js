module.exports = (sequelize, DataTypes) => {
    const Finanzas = sequelize.define("Finanzas", {
      CentroFinancieroIngresos: {
        type: DataTypes.STRING,
        allowNull: false
      },
      PlantillaFactura: {
        type: DataTypes.STRING,
        allowNull: false
      },
      CentroFinancieroPagos: {
        type: DataTypes.STRING,
        allowNull: false
      },
      TemplateProforma: {
        type: DataTypes.STRING,
        allowNull: false
      },
      CategoriaIngreso: {
        type: DataTypes.STRING,
        allowNull: false
      },
      MetodoPago: {
        type: DataTypes.STRING,
        allowNull: false
      },
      PagoAPartirDe: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Deposito: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      Saldo: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    Finanzas.associate = models => {
      Finanzas.belongsTo(models.AgenciasDeViaje, {
        foreignKey: {
          allowNull: false
        }
      });
      Finanzas.hasMany(models.CreditosDeudasDetalle, { onDelete: 'cascade' });
      Finanzas.hasMany(models.CuentasBancarias, { onDelete: 'cascade' });
    };
  
    return Finanzas;
  };
  