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
        },
        formula: {
            type: DataTypes.STRING,
            allowNull: false
        },
        calculo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creador: {
            type: DataTypes.STRING,
            allowNull: false
        },
        host: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sitio_web: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        licencia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        supplier_check_in: {
            type: DataTypes.TIME,
            allowNull: false
        },
        supplier_check_out: {
            type: DataTypes.TIME,
            allowNull: false
        },
        capacidad_proveedor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        calle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        colonia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo_postal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lenguaje_comunicacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modo_comunicacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        centro_efectivo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        divisa_centro_efectivo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        metodo_pago_defecto: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Proveedores',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });

    return Proveedor;
};
