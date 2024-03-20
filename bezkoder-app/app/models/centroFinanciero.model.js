module.exports = (sequelize, DataTypes) => {
    const CentroFinanciero = sequelize.define('CentroFinanciero', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CentroFinanciero: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Centro Financiero no sea nulo
        },
        Total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Total no sea nulo
        },
        TotalUSD: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Total USD no sea nulo
        }
    }, {
        tableName: 'CentrosFinancieros',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return CentroFinanciero;
};
