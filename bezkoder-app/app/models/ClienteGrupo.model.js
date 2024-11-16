// models/ClienteGrupo.js
module.exports = (sequelize, DataTypes) => {
    const ClienteGrupo = sequelize.define('ClienteGrupo', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        IdCliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        IdGrupo: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'ClienteGrupo',
        timestamps: false
    });

    return ClienteGrupo;
};
