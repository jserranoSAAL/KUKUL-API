module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define('Proveedor', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Proveedor: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Proveedor no sea nulo
        },
        CategoriaProveedor: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Categoría de Proveedor no sea nulo
        },
        Ciudad: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Ciudad no sea nulo
        },
        Contacto: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Contacto no sea nulo
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: false, // Asegura que el campo Teléfono no sea nulo
            validate: {
                is: /^\+?([0-9]{2,3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,6})$/ // Esta es una expresión regular para validar formatos de número de teléfono. Modifícalo según tus necesidades.
            }
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false, // Asegura que el campo Email no sea nulo
            validate: {
                isEmail: true // Valida que el campo sea un correo electrónico válido
            }
        },
        Calificacion: {
            type: DataTypes.FLOAT,
            allowNull: true, // Este campo puede ser nulo
            validate: {
                min: 0, // La calificación mínima
                max: 5  // La calificación máxima
            }
        }
    }, {
        tableName: 'Proveedores',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Proveedor;
};
