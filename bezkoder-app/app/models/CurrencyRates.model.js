module.exports = (sequelize, DataTypes) => {
    const CurrencyRates = sequelize.define('CurrencyRates', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      from_currency_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Currencies',
          key: 'ID',
        },
        onDelete: 'CASCADE',
      },
      to_currency_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Currencies',
          key: 'ID',
        },
        onDelete: 'CASCADE',
      },
      exchange_rate: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false,
      },
      last_update: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'CurrencyRates',
      timestamps: false,
    });
  
    CurrencyRates.associate = (models) => {
      CurrencyRates.belongsTo(models.Currency, { as: 'fromCurrency', foreignKey: 'from_currency_id' });
      CurrencyRates.belongsTo(models.Currency, { as: 'toCurrency', foreignKey: 'to_currency_id' });
    };
  
    return CurrencyRates;
  };
  