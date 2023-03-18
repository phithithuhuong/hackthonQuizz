import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import connectDB from './src/configs/connectDB.js'
import route from './src/routers/index.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cookieParser(process.env.USER_CODE_SECRET));

mongoose.set('strictQuery', true);

app.use(express.static('./src/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);

(async() => {
    try {
        // await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on: http://localhost:${PORT}/`);
        })
    } catch (error) {
        console.log(error);
    }
})()
