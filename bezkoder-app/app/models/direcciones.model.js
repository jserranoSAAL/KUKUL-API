// app/models/direcciones.model.js

module.exports = (sequelize, DataTypes) => {
    const Direcciones = sequelize.define('Direcciones', {
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
        Calle: {
            type: DataTypes.STRING
        },
        Zona: {
            type: DataTypes.STRING
        },
        Ciudad: {
            type: DataTypes.STRING
        },
        CodigoPostal: {
            type: DataTypes.STRING
        },
        Region: {
            type: DataTypes.STRING
        },
        Pais: {
            type: DataTypes.STRING
        }
    });

    Direcciones.associate = function(models) {
        Direcciones.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    };

    return Direcciones;
};
