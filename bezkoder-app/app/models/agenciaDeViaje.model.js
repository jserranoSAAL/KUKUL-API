module.exports = (sequelize, DataTypes) => {
    const AgenciasDeViaje = sequelize.define('AgenciasDeViaje', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING(100)
        },
        Contacto: {
            type: DataTypes.STRING(100)
        },
        Telefono: {
            type: DataTypes.STRING(20)
        },
        CorreoElectronico: {
            type: DataTypes.STRING(100)
        },
        Categoria: {
            type: DataTypes.STRING(50)
        },
        Prioridad: {
            type: DataTypes.STRING(50)
        },
        Nacionalidad: {
            type: DataTypes.STRING(50)
        },
        Website: {
            type: DataTypes.STRING(100)
        },
        SedeCentral: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'AgenciasDeViaje',
        timestamps: false
    });

    AgenciasDeViaje.associate = function(models) {
        AgenciasDeViaje.hasOne(models.AgenciasDeViajeInformacion, { foreignKey: 'AgenciasDeViajeID', as: 'informacion' });
    };

    return AgenciasDeViaje;
};
