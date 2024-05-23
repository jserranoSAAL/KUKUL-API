module.exports = (sequelize, DataTypes) => {
    const DescripcionProducto = sequelize.define('DescripcionProducto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: 'Productos', // Nombre de la tabla de productos
                key: 'id'
            }
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        nivel: {
            type: DataTypes.STRING(10)
        },
        region: {
            type: DataTypes.STRING(255)
        },
        etiquetas: {
            type: DataTypes.STRING(255)
        },
        detalles: {
            type: DataTypes.JSON
        },
        traduccion_tech: {
            type: DataTypes.STRING(255)
        },
        traduccion_en: {
            type: DataTypes.STRING(255)
        },
        traduccion_es: {
            type: DataTypes.STRING(255)
        },
        traduccion_fr: {
            type: DataTypes.STRING(255)
        },
        incluidos: {
            type: DataTypes.STRING(255)
        },
        imagenes: {
            type: DataTypes.JSON
        }
    }, {
        tableName: 'DescripcionProducto'
    });

    return DescripcionProducto;
};
