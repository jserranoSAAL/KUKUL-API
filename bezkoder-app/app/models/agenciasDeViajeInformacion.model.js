module.exports = (sequelize, DataTypes) => {
    const AgenciasDeViajeInformacion = sequelize.define('AgenciasDeViajeInformacion', {
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
        Categorie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Priorite: {
            type: DataTypes.STRING
        },
        Nationalite: {
            type: DataTypes.STRING
        },
        Licence: {
            type: DataTypes.STRING
        },
        SiteInternet: {
            type: DataTypes.STRING
        },
        ResponsableAgence: {
            type: DataTypes.STRING
        },
        SiegeSocial: {
            type: DataTypes.STRING
        },
        CreePar: {
            type: DataTypes.STRING
        },
        ModifiePar: {
            type: DataTypes.STRING
        },
        Tags: {
            type: DataTypes.STRING
        },
        Historique: {
            type: DataTypes.TEXT
        },
        LogoURL: {
            type: DataTypes.STRING
        }
    });
    
    AgenciasDeViajeInformacion.associate = function(models) {
        AgenciasDeViajeInformacion.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    };

    return AgenciasDeViajeInformacion;
};
