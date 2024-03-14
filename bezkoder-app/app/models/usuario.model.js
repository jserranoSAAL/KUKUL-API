module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        // Cambia ID a username como identificador único si es necesario, o añade username si ID aún se necesita como PK autoincremental.
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        name_user: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name_user: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        rol: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW // Asegura que el valor por defecto sea la fecha y hora actuales
        }
    }, {
        tableName: 'Usuarios',
        timestamps: false // Si quieres utilizar 'created_at', podrías considerar activar los timestamps y configurar 'updatedAt' para que no se use.
    });
    return Usuario;
};
