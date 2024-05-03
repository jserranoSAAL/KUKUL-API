// models/costos.js
module.exports = (sequelize, DataTypes) => {
    const Costos = sequelize.define('Costos', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ProductoID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Productos',
                key: 'ID'
            }
        },
        CurrencyID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Currencies',
                key: 'id'
            }
        },
        CostType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        RoomType: {
            type: DataTypes.STRING
        },
        PaxMax: {
            type: DataTypes.INTEGER
        },
        ChildPercentage: {
            type: DataTypes.DECIMAL(10, 2)
        },
        InfantPercentage: {
            type: DataTypes.DECIMAL(10, 2)
        },
        Commissionable: {
            type: DataTypes.BOOLEAN
        },
        NotApplyToExemption: {
            type: DataTypes.BOOLEAN
        },
        Day: {
            type: DataTypes.INTEGER
        },
        StartDate: {
            type: DataTypes.DATEONLY
        },
        EndDate: {
            type: DataTypes.DATEONLY
        }
    }, {
        tableName: 'Costos',
        timestamps: false
    });

    return Costos;
};
