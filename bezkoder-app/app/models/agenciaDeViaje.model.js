module.exports = (sequelize, DataTypes) => {
    const AgenciaDeViaje = sequelize.define('AgenciaDeViaje', {
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
        }
    }, {
        tableName: 'AgenciasDeViaje',
        timestamps: false
    });
    return AgenciaDeViaje;
};
