module.exports = (sequelize, DataTypes) => {
    const ProveedoresContactos = sequelize.define("ProveedoresContactos", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        proveedorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Proveedores',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        apellidos: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        correo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        telefono: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        direccion: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        ciudad: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        estado: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        codigoPostal: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        pais: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        idiomaDeComunicacion: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        modoDeComunicacion: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        numeroDeFax: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    });

    ProveedoresContactos.associate = function(models) {
        ProveedoresContactos.belongsTo(models.Proveedores, { foreignKey: 'proveedorId', onDelete: 'CASCADE' });
    };

    return ProveedoresContactos;
};
