module.exports = (sequelize, DataTypes) => {
    const CreditosDebitos = sequelize.define('CreditosDebitos', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false // Asegura que el campo Fecha no sea nulo
        },
        Grupo: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Grupo no sea nulo. Considera cambiar a INTEGER si se refiere a un ID de otro modelo
        },
        Proveedor: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Proveedor no sea nulo. Considera cambiar a INTEGER si se refiere a un ID de otro modelo
        },
        Agencia: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Agencia no sea nulo. Considera cambiar a INTEGER si se refiere a un ID de otro modelo
        },
        MontoSinIVA: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Monto sin IVA no sea nulo
        },
        IVA: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo IVA no sea nulo
        },
        Total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Total no sea nulo
        },
        Moneda: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Moneda no sea nulo
        },
        EstadoDePago: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Estado de Pago no sea nulo
        },
        Notas: {
            type: DataTypes.TEXT,
            allowNull: true // Este campo puede ser nulo dependiendo de tus necesidades
        }
    }, {
        tableName: 'CreditosDebitos',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return CreditosDebitos;
};
