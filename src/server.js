import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import './models/index.js';
import sequelize from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

sequelize.sync({alter: true})
.then(() => {
    app.listen(PORT, () => {
        console.log("Server is running...\nhttp://localhost:3306");
    })
})
.catch((error) => {
    console.log(error.message)
})

