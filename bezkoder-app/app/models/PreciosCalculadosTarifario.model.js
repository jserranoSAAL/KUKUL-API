module.exports = (sequelize, DataTypes) => {
    const PreciosCalculadosTarifario = sequelize.define("PreciosCalculadosTarifario", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cotizacionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'CotizacionesTarifarios',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        desde: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hasta: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        base_utilizada: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        costo: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });

    PreciosCalculadosTarifario.associate = function(models) {
        PreciosCalculadosTarifario.belongsTo(models.CotizacionesTarifario, { foreignKey: 'cotizacionId', onDelete: 'CASCADE' });
    };

    return PreciosCalculadosTarifario;
};
