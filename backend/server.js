import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

//config env
dotenv.config();

//db config
connectDB();

// rest obj
const app = express();
const _dirname = path.resolve();

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
app.use(morgan('dev'));
const corsOptions = {
    origin:"https://baghouse.onrender.com",
    credentials:true
}
app.use(cors(corsOptions));

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

app.use(express.static(path.join(_dirname, "/client/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"))
})

//port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("running on 3000");
})