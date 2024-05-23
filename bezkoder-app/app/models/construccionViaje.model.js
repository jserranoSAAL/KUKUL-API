// models/construccionViaje.model.js
module.exports = (sequelize, DataTypes) => {
    const ConstruccionViaje = sequelize.define('ConstruccionViaje', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: true
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: true
        },
        descripcion: {
            type: DataTypes.TEXT,
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
        },
        agenciaDeViajeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'AgenciasDeViaje',
                key: 'id'
            },
            onDelete: 'CASCADE'
        }
    });

    ConstruccionViaje.associate = function(models) {
        ConstruccionViaje.hasMany(models.ViajeProducto, { foreignKey: 'viajeId', onDelete: 'CASCADE' });
        ConstruccionViaje.belongsTo(models.AgenciasDeViaje, { foreignKey: 'agenciaDeViajeId', onDelete: 'CASCADE' });
    };

    return ConstruccionViaje;
};
