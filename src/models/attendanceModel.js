import {DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

const Attendance = sequelize.define('Attendance',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('present', 'absent', 'permission', 'late'),
            allowNull: false
        }
    },
    {
        tableName: 'attendances',
        timestamps: true
    }
)

export default Attendance;