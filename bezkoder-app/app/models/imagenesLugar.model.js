module.exports = (sequelize, DataTypes) => {
    const ImagenesLugar = sequelize.define('ImagenesLugar', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        LugarID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ImagenURL: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    });

    return ImagenesLugar;
};
