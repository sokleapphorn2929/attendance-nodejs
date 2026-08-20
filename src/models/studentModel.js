import {DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

const Student = sequelize.define('Student',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'students',
        timestamps: true
    }
)

export default Student;