module.exports = (sequelize, DataTypes) => {
    const CotizacionesPaquete = sequelize.define('CotizacionesPaquete', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        paqueteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Paquete',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        fecha_calculo: {
            type: DataTypes.DATE,
            allowNull: false
        },
        validez_desde: {
            type: DataTypes.DATE,
            allowNull: false
        },
        validez_hasta: {
            type: DataTypes.DATE,
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

    CotizacionesPaquete.associate = function(models) {
        CotizacionesPaquete.hasMany(models.ParametrosCotizacionPaquete, { foreignKey: 'cotizacionId', onDelete: 'CASCADE' });
        CotizacionesPaquete.hasMany(models.PreciosCalculadosPaquete, { foreignKey: 'cotizacionId', onDelete: 'CASCADE' });
    };

    return CotizacionesPaquete;
};