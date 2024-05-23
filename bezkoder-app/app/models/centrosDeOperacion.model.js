module.exports = (sequelize, DataTypes) => {
    const CentroDeOperacion = sequelize.define('CentroDeOperacion', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        tel: {
            type: DataTypes.STRING(20)
        },
        cel: {
            type: DataTypes.STRING(20)
        },
        fax: {
            type: DataTypes.STRING(20)
        },
        email: {
            type: DataTypes.STRING(255)
        },
        estado_confirmacion: {
            type: DataTypes.STRING(255),
            defaultValue: 'pendiente' // Valores posibles: 'pendiente', 'no_enviado', 'verificado'
        }
    }, {
        tableName: 'CentrosDeOperacion'
    });

    return CentroDeOperacion;
};
