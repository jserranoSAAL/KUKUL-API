module.exports = (sequelize, DataTypes) => {
    const Slogan = sequelize.define('Slogan', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        slogan_en: {
            type: DataTypes.TEXT
        },
        slogan_es: {
            type: DataTypes.TEXT
        },
        slogan_fr: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'slogans'
    });

    return Slogan;
};
