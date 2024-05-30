// models/direccion.model.js
module.exports = (sequelize, DataTypes) => {
    const DireccionAgenciaViaje = sequelize.define('DireccionAgenciaViaje', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        calle: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        zona: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        ciudad: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        codigo_postal: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        region: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        pais: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        agenciaDeViajeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'AgenciasDeViaje',
                key: 'id'
            },
            onDelete: 'CASCADE'
        }
    }, {
        tableName: 'DireccionAgenciaViaje',
        timestamps: false
    });

    DireccionAgenciaViaje.associate = function(models) {
        Direccion.belongsTo(models.AgenciasDeViaje, { foreignKey: 'agenciaDeViajeId', onDelete: 'CASCADE' });
    };

    return DireccionAgenciaViaje;
};
