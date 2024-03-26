module.exports = (sequelize, DataTypes) => {
    const Paquete = sequelize.define('Paquete', {
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Codigo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Inicio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Fin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Creador: {
            type: DataTypes.STRING,
            allowNull: false
        },
        TipoDeViaje: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Etiquetas: {
            type: DataTypes.STRING, // Considera cambiar a JSON si tu base de datos soporta
            get() {
                const rawValue = this.getDataValue('Etiquetas');
                return rawValue ? JSON.parse(rawValue) : [];
            },
            set(value) {
                this.setDataValue('Etiquetas', JSON.stringify(value));
            }
        },
        Nivel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Traducciones: {
            type: DataTypes.STRING, // Cambia a JSON según tu DB
            allowNull: true
        },
        Imagenes: {
            type: DataTypes.TEXT,
            get() {
                const rawValue = this.getDataValue('Imagenes');
                return rawValue ? JSON.parse(rawValue) : [];
            },
            set(value) {
                this.setDataValue('Imagenes', JSON.stringify(value));
            },
            allowNull: true
        },
        NotasInternas: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'Paquete',
        timestamps: false
    });
    return Paquete;
};
