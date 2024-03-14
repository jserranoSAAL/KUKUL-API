module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING(100)
        },
        Descripcion: {
            type: DataTypes.TEXT
        },
        Precio: {
            type: DataTypes.DECIMAL(10, 2)
        },
        ProveedorID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Proveedores',
                key: 'ID'
            }
        }
    }, {
        tableName: 'Productos',
        timestamps: false
    });
    return Producto;
};
