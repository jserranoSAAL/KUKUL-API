// models/cliente.js
module.exports = (sequelize, DataTypes) => {
    const ClienteViajeProducto = sequelize.define('ClienteViajeProducto', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        IdCliente: {
            type: DataTypes.INTEGER,
        },
        IdViajeProducto: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: 'ClienteViajeProducto',
        timestamps: false
    });

    return ClienteViajeProducto;
};
