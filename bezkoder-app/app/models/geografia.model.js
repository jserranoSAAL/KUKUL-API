module.exports = (sequelize, DataTypes) => {
    const Geografia = sequelize.define('Geografia', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_es: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo nombre_es no sea nulo
        },
        nombre_en: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo nombre_en no sea nulo
        },
        nombre_fr: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo nombre_fr no sea nulo
        },
        desc_es: {
            type: DataTypes.TEXT,
            allowNull: true  // El campo desc_es puede ser nulo
        },
        desc_en: {
            type: DataTypes.TEXT,
            allowNull: true  // El campo desc_en puede ser nulo
        },
        desc_fr: {
            type: DataTypes.TEXT,
            allowNull: true  // El campo desc_fr puede ser nulo
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

    Geografia.associate = function(models) {
        Geografia.hasMany(models.Producto, { foreignKey: 'GeografiaID', as: 'productos' });
    };

    return Geografia;
};
