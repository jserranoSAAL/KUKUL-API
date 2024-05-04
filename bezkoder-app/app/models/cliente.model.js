// models/cliente.js
module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Telefono: {
            type: DataTypes.STRING
        },
        Direccion: {
            type: DataTypes.STRING
        },
        Ciudad: {
            type: DataTypes.STRING
        },
        Estado: {
            type: DataTypes.STRING
        },
        CodigoPostal: {
            type: DataTypes.STRING
        },
        Pais: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Clientes',
        timestamps: false
    });

    return Cliente;
};
