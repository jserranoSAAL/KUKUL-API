module.exports = (sequelize, DataTypes) => {
    const CentroFinanciero = sequelize.define('CentroFinanciero', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false  // Hacer el nombre obligatorio
        },
        tipo: {
            type: DataTypes.STRING(50),  // Podría ser 'Banco', 'Cuenta', etc.
            allowNull: false
        },
        moneda: {
            type: DataTypes.STRING(10),  // Por ejemplo: 'MXN', 'USD', etc.
            allowNull: false
        },
        codigo: {
            type: DataTypes.STRING(10),  // Código o referencia de la cuenta
            allowNull: false
        },
        balanceLocal: {
            type: DataTypes.DECIMAL(15, 2),  // Para el saldo en moneda local
            allowNull: false,
            defaultValue: 0.00
        },
        balanceUSD: {
            type: DataTypes.DECIMAL(15, 2),  // Para el saldo en USD
            allowNull: false,
            defaultValue: 0.00
        },
        balanceNegativo: {
            type: DataTypes.BOOLEAN,  // Para indicar si hay balance negativo
            defaultValue: false
        },
        tipoCambio: {
            type: DataTypes.DECIMAL(10, 4),  // Para el tipo de cambio USD a moneda local
            allowNull: false,
            defaultValue: 1.00  // Por defecto, 1 USD = 1 moneda local
        },
        cajaChica: {
            type: DataTypes.DECIMAL(15, 2),  // Para el efectivo disponible
            allowNull: false,
            defaultValue: 0.00
        }
    }, {
        tableName: 'CentroFinanciero'
    });

    return CentroFinanciero;
};
