module.exports = (sequelize, DataTypes) => {
    const ContactInfo = sequelize.define('ContactInfo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(255)
        },
        phone: {
            type: DataTypes.STRING(20)
        },
        skype_contact: {
            type: DataTypes.STRING(255)
        },
        chat1: {
            type: DataTypes.STRING(255)
        },
        chat2: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'contact_info'
    });

    return ContactInfo;
};
