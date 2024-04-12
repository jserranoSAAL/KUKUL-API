module.exports = (sequelize, DataTypes) => {
    const TermsAndConditions = sequelize.define('TermsAndConditions', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        terms_en: {
            type: DataTypes.TEXT
        },
        terms_es: {
            type: DataTypes.TEXT
        },
        terms_fr: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'terms_and_conditions'
    });

    return TermsAndConditions;
};
