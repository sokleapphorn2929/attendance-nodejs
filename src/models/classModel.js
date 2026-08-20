import {DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

const Class = sequelize.define('Class',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        className:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'classes',
        timestamps: true
    }
)

export default Class;