// app/models/extranetClient.model.js

module.exports = (sequelize, DataTypes) => {
    const ExtranetClient = sequelize.define('ExtranetClient', {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        AgenciasDeViajeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'AgenciasDeViaje',
                key: 'ID'
            }
        },
        CodigoAcceso: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Notificaciones: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Viajes: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        GITCalendario: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Tarifarios: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Productos: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Informaciones: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    ExtranetClient.associate = function(models) {
        ExtranetClient.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    };

    return ExtranetClient;
};
