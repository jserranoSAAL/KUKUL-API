module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define('Proveedor', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING(100)
        },
        Contacto: {
            type: DataTypes.STRING(100)
        },
        Telefono: {
            type: DataTypes.STRING(20)
        },
        CorreoElectronico: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'Proveedores',
        timestamps: false
    });
    return Proveedor;
};
