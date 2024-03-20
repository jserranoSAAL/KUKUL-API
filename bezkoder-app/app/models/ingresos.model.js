module.exports = (sequelize, DataTypes) => {
    const Ingreso = sequelize.define('Ingreso', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false // Asegura que el campo Fecha no sea nulo
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Nombre no sea nulo
        },
        Categoria: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Categoria no sea nulo
        },
        Grupo: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Grupo no sea nulo. Considera cambiar a INTEGER si se refiere a un ID de otro modelo
        },
        Agencia: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Agencia no sea nulo. Considera cambiar a INTEGER si se refiere a un ID de otro modelo
        },
        PagoConIVA: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Pago con IVA no sea nulo
        },
        TipoDePago: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Tipo de Pago no sea nulo
        },
        PagoSinIVA: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Pago sin IVA no sea nulo
        },
        Impuesto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Impuesto no sea nulo
        },
        Moneda: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Moneda no sea nulo
        },
        CentroFinanciero: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Centro Financiero no sea nulo
        },
        TC: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: true // Este campo puede ser nulo dependiendo de tus necesidades
        },
        USD: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true // Este campo puede ser nulo dependiendo de tus necesidades
        },
        FechaDePago: {
            type: DataTypes.DATEONLY,
            allowNull: false // Asegura que el campo Fecha de Pago no sea nulo
        },
        Notas: {
            type: DataTypes.TEXT,
            allowNull: true // Este campo puede ser nulo dependiendo de tus necesidades
        },
        Pagador: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Pagador no sea nulo
        },
        NumeroDeOrden: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Número de Orden no sea nulo
        },
        Identificador: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Identificador no sea nulo
        },
        Desl: {
            type: DataTypes.STRING,
            allowNull: true // Este campo puede ser nulo dependiendo de tus necesidades
        },
        Factura: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Factura no sea nulo
        },
        Responsable: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Responsable no sea nulo
        }
    }, {
        tableName: 'Ingresos',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Ingreso;
};
