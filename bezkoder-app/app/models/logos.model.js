module.exports = (sequelize, DataTypes) => {
    const Logo = sequelize.define('Logo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        file_path: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'logos'
    });

    return Logo;
};
