// models/proveedor.js
module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define('Proveedor', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Proveedor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        CategoriaProveedor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Ciudad: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Contacto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Calificacion: {
            type: DataTypes.FLOAT,
            allowNull: true,
            validate: {
                min: 0,
                max: 5
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
        },
        CurrencyID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Currencies',
                key: 'ID'
            }
        }
    }, {
        tableName: 'Proveedores',
        timestamps: false
    });

    Proveedor.associate = (models) => {
        Proveedor.belongsTo(models.Currency, {
            foreignKey: 'CurrencyID',
            as: 'currency'
        });
    };

    return Proveedor;
};
