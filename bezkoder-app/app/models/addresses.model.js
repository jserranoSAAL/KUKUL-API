module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: {
            type: DataTypes.STRING(255)
        },
        district: {
            type: DataTypes.STRING(255)
        },
        town: {
            type: DataTypes.STRING(255)
        },
        zip_code: {
            type: DataTypes.STRING(20)
        },
        state: {
            type: DataTypes.STRING(255)
        },
        country: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'addresses'
    });

    return Address;
};
