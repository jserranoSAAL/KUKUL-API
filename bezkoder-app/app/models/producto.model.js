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
        Categoria: {
            type: DataTypes.STRING
        },
        NivelProducto: {
            type: DataTypes.STRING
        },        
        Region: {
            type: DataTypes.STRING
        },        
        ProveedorID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Proveedores',
                key: 'ID'
            }
        },
        DEF: {
            type: DataTypes.STRING
        },
        GEN: {
            type: DataTypes.STRING
        },
        Codigo: {
            type: DataTypes.STRING
        },
        Status: {
            type: DataTypes.STRING
        },
        GeografiaID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Geografia',
                key: 'ID'
            }
        }
    }, {
        tableName: 'Productos',
        timestamps: false
    });

    Producto.associate = function(models) {
        Producto.belongsTo(models.Geografia, { foreignKey: 'GeografiaID', as: 'geografia' });
    };

    return Producto;
};
