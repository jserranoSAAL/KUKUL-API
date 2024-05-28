module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define('Proveedor', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Proveedor: {
            type: DataTypes.STRING,
            allowNull: true // Asegura que el campo Proveedor no sea nulo
        },
        CategoriaProveedor: {
            type: DataTypes.STRING,
            allowNull: true // Asegura que el campo Categoría de Proveedor no sea nulo
        },
        Ciudad: {
            type: DataTypes.STRING,
            allowNull: true // Asegura que el campo Ciudad no sea nulo
        },
        Contacto: {
            type: DataTypes.STRING,
            allowNull: true // Asegura que el campo Contacto no sea nulo
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: true, // Asegura que el campo Teléfono no sea nulo
            validate: {
                is: /^\+?([0-9]{2,3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,6})$/ // Esta es una expresión regular para validar formatos de número de teléfono. Modifícalo según tus necesidades.
            }
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true, // Asegura que el campo Email no sea nulo
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
        },
        formula: {
            type: DataTypes.STRING,
            allowNull: true
        },
        calculo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        creador: {
            type: DataTypes.STRING,
            allowNull: true
        },
        host: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sitio_web: {
            type: DataTypes.STRING,
            allowNull: true
        },
        codigo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        licencia: {
            type: DataTypes.STRING,
            allowNull: true
        },
        supplier_check_in: {
            type: DataTypes.TIME,
            allowNull: true
        },
        supplier_check_out: {
            type: DataTypes.TIME,
            allowNull: true
        },
        capacidad_proveedor: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        calle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        colonia: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: true
        },
        codigo_postal: {
            type: DataTypes.STRING,
            allowNull: true
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lenguaje_comunicacion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        modo_comunicacion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        centro_efectivo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        divisa_centro_efectivo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        metodo_pago_defecto: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'Proveedores',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });

    return Proveedor;
};
