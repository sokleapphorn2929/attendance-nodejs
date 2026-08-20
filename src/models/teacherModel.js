import {DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

const Teacher = sequelize.define('Teacher',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'teachers',
        timestamps: true
    }
)

export default Teacher;