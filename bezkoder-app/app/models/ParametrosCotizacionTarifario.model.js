module.exports = (sequelize, DataTypes) => {
    const ParametrosCotizacionTarifario = sequelize.define("ParametrosCotizacionTarifario", {
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
        rooming_experimento: {
            type: DataTypes.STRING,
            allowNull: true
        },
        costos_adicionales: {
            type: DataTypes.STRING,
            allowNull: true
        },
        moneda: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo_habitacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modo_calculo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        margen: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        costo_adicional: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });

    ParametrosCotizacionTarifario.associate = function(models) {
        ParametrosCotizacionTarifario.belongsTo(models.CotizacionesTarifario, { foreignKey: 'cotizacionId', onDelete: 'CASCADE' });
    };

    return ParametrosCotizacionTarifario;
};
