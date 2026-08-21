import mysql from 'mysql2/promise';
import 'dotenv/config.js';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_CONNECTION,
        logging: false
    }
);

const testConnection = async () => {
    try {
        const connection = await sequelize.authenticate();
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};

testConnection();

export default sequelize;