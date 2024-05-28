module.exports = (sequelize, DataTypes) => {
    const ParametrosCotizacionPaquete = sequelize.define('ParametrosCotizacionPaquete', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cotizacionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'CotizacionesPaquete',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        roomingExtra: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        costosAdicionales: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        moneda: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        modoCalculo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        margen: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });

    ParametrosCotizacionPaquete.associate = function(models) {
        ParametrosCotizacionPaquete.belongsTo(models.CotizacionesPaquete, { foreignKey: 'cotizacionId', onDelete: 'CASCADE' });
    };

    return ParametrosCotizacionPaquete;
};