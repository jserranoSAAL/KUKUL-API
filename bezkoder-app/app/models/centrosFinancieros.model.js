module.exports = (sequelize, DataTypes) => {
    const CentroFinanciero = sequelize.define('CentroFinanciero', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255)
        },
        tipo: {
            type: DataTypes.STRING(50)
        },
        moneda: {
            type: DataTypes.STRING(10)
        },
        codigo: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'CentroFinanciero'
    });

    return CentroFinanciero;
};
