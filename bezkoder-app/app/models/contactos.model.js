// app/models/contactos.model.js

module.exports = (sequelize, DataTypes) => {
    const Contactos = sequelize.define('Contactos', {
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
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Apellidos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        PorDef: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Telefono: {
            type: DataTypes.STRING
        }
    });

    Contactos.associate = function(models) {
        Contactos.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    };

    return Contactos;
};
