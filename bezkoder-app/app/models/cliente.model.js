// models/cliente.js
module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        IdGrupo: {
            type: DataTypes.INTEGER,
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
        Genero: {
            type: DataTypes.STRING
        },
        Edad: {
            type: DataTypes.STRING
        },
        Nacionalidad: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Clientes',
        timestamps: false
    });

    return Cliente;
};
