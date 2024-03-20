module.exports = (sequelize, DataTypes) => {
    const Geografia = sequelize.define('Geografia', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo Nombre no sea nulo
        },
        Latitude: {
            type: DataTypes.DOUBLE,
            allowNull: false // Asegura que el campo Latitud no sea nulo
        },
        Longitude: {
            type: DataTypes.DOUBLE,
            allowNull: false // Asegura que el campo Longitud no sea nulo
        }
    }, {
        tableName: 'Geografia',
        timestamps: false  // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Geografia;
};
