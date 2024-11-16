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
            allowNull: false,
            references: {
                model: 'Clientes',
                key: 'ID'
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
        ClienteViajeProducto.belongsTo(models.Clientes, { foreignKey: 'IdCliente', onDelete: 'CASCADE' });
        ClienteViajeProducto.belongsTo(models.ViajeProducto, { foreignKey: 'IdCliente', onDelete: 'CASCADE' });
    };

    return ClienteViajeProducto;
};
