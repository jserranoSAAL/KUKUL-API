module.exports = (sequelize, DataTypes) => {
    const Gasto = sequelize.define('Gasto', {
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
        Servicio: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Servicio no sea nulo
        },
        CostoSinIVA: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Costo sin IVA no sea nulo
        },
        IVA: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo IVA no sea nulo
        },
        TotalCosto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Total Costo no sea nulo
        },
        CentroFinanciero: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Centro Financiero no sea nulo
        },
        TC: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true // Este campo puede ser nulo dependiendo de tus necesidades
        },
        FechaPago: {
            type: DataTypes.DATEONLY,
            allowNull: true // Este campo puede ser nulo dependiendo de tus necesidades
        },
        EstadoPago: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Estado Pago no sea nulo
        },
        Notas: {
            type: DataTypes.TEXT,
            allowNull: true // Este campo puede ser nulo dependiendo de tus necesidades
        },
        Identificador: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Identificador no sea nulo
        }
    }, {
        tableName: 'Gastos',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Gasto;
};
