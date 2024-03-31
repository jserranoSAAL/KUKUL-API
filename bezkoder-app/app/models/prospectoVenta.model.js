module.exports = (sequelize, DataTypes) => {
    const ProspectoVenta = sequelize.define('ProspectoVenta', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Proyecto: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Proyecto no sea nulo. Cambia a INTEGER si se refiere a un ID de otro modelo
        },
        Agencia: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Agencia no sea nulo. Cambia a INTEGER si se refiere a un ID de otro modelo
        },
        Viaje: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Viaje no sea nulo. Cambia a INTEGER si se refiere a un ID de otro modelo
        },
        Inicio: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Inicio no sea nulo
        },
        Estado: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Estado no sea nulo
        },
        EstadoDePago: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Estado de Pago no sea nulo
        }
    }, {
        tableName: 'ProspectosVenta',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return ProspectoVenta;
};
