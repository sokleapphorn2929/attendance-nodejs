import express from 'express';
import 'dotenv/config';
import db from './config/db.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, (req, res) => {
    console.log("http://localhost:3306");
})