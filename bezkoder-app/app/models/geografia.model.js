module.exports = (sequelize, DataTypes) => {
    const Geografia = sequelize.define('Geografia', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_es: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre_en: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre_fr: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc_es: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        desc_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        desc_fr: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        Latitude: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        Longitude: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        tableName: 'Geografia',
        timestamps: false
    });

    Geografia.associate = function(models) {
        Geografia.hasMany(models.Productos, { foreignKey: 'GeografiaID', as: 'productos' });
    };

    return Geografia;
};
