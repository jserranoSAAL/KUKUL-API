module.exports = (sequelize, DataTypes) => {
    const Factura = sequelize.define('Factura', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Factura: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Factura no sea nulo
        },
        Viaje: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Viaje no sea nulo. Cambia a INTEGER si es una referencia a otro modelo
        },
        Numero: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Número no sea nulo
        },
        Orden: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Orden no sea nulo
        },
        Agencia: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Agencia no sea nulo. Cambia a INTEGER si es una referencia a otro modelo
        },
        Pagador: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Pagador no sea nulo
        },
        Estado: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Estado no sea nulo
        },
        FechaLimite: {
            type: DataTypes.DATEONLY,
            allowNull: false // Asegura que el campo Fecha Límite no sea nulo
        },
        FechaPago: {
            type: DataTypes.DATEONLY,
            allowNull: true // Este campo puede ser nulo dependiendo de si la factura ha sido pagada o no
        },
        ImporteSinIVA: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Importe Sin IVA no sea nulo
        },
        Total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Total no sea nulo
        },
        TotalGrupo: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Total Grupo no sea nulo
        },
        SaldoGrupo: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Saldo Grupo no sea nulo
        },
        Moneda: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Moneda no sea nulo
        },
        Identificador: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Identificador no sea nulo
        }
    }, {
        tableName: 'Facturas',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Factura;
};
