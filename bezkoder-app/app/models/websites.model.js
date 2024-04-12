module.exports = (sequelize, DataTypes) => {
    const Website = sequelize.define('Website', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        website_en: {
            type: DataTypes.STRING(255)
        },
        website_es: {
            type: DataTypes.STRING(255)
        },
        website_fr: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'websites'
    });

    return Website;
};
