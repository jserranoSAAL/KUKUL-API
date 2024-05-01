// models/metodosDePago.model.js

module.exports = (sequelize, DataTypes) => {
    const MetodoDePago = sequelize.define('MetodoDePago', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comision: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        default: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false // Valor por defecto para el campo 'default'
        }
    });

    return MetodoDePago;
};
