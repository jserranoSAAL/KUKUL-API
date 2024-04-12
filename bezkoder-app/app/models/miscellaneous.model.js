module.exports = (sequelize, DataTypes) => {
    const Miscellaneous = sequelize.define('Miscellaneous', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        time_zone: {
            type: DataTypes.STRING(50)
        },
        default_first_date: {
            type: DataTypes.DATE
        },
        next_invoice_number: {
            type: DataTypes.STRING(50)
        },
        forget_unpaid_services_days: {
            type: DataTypes.INTEGER
        },
        max_infant_age: {
            type: DataTypes.INTEGER
        },
        max_child_age: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'miscellaneous'
    });

    return Miscellaneous;
};
