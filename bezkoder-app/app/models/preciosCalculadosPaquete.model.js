module.exports = (sequelize, DataTypes) => {
    const PreciosCalculadosPaquete = sequelize.define('PreciosCalculadosPaquete', {
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
        desde: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hasta: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        baseUtilizada: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        costo: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        porcentaje: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        supSGL: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        minTPL: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        minQD: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        minNino: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        supBebe: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
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

    PreciosCalculadosPaquete.associate = function(models) {
        PreciosCalculadosPaquete.belongsTo(models.CotizacionesPaquete, { foreignKey: 'cotizacionId', onDelete: 'CASCADE' });
    };

    return PreciosCalculadosPaquete;
};