// models/cliente.js
module.exports = (sequelize, DataTypes) => {
    const ClienteViajeProducto = sequelize.define('ClienteViajeProducto', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        IdClienteGrupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ClienteGrupo',
                key: 'Id'
            },
            onDelete: 'CASCADE'
        },
        IdViajeProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ViajeProductos',
                key: 'id'
            },
            onDelete: 'CASCADE'
        }
    }, {
        tableName: 'ClienteViajeProducto',
        timestamps: false
    });

    ClienteViajeProducto.associate = function (models) {
        ClienteViajeProducto.belongsTo(models.ClienteGrupo, { foreignKey: 'IdClienteGrupo', onDelete: 'CASCADE' });
        ClienteViajeProducto.belongsTo(models.ViajeProducto, { foreignKey: 'IdViajeProducto', onDelete: 'CASCADE' });
    };

    return ClienteViajeProducto;
};
