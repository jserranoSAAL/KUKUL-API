module.exports = (sequelize, DataTypes) => {
    const CotizacionesTarifario = sequelize.define("CotizacionesTarifario", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tarifarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Tarifario',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        fecha_calculo: {
            type: DataTypes.DATE,
            allowNull: false
        },
        validez_del: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        preaviso_min: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    CotizacionesTarifario.associate = function(models) {
        CotizacionesTarifario.belongsTo(models.Tarifarios, { foreignKey: 'tarifarioId', onDelete: 'CASCADE' });
    };

    return CotizacionesTarifario;
};
