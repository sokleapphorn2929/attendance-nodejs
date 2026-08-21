import express from 'express';
import dotenv from 'dotenv';
import './models/index.js';
import apiRoute from './routes/apiRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log("Server is running...\nhttp://localhost:3000");
})