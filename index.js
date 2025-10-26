import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/db.js';
import userRoute from "./routes/user.route.js";
import expenseRoute from "./routes/expense.route.js";

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// Configure CORS to allow the frontend origin and support credentials (cookies)
// NOTE: set the origin to the actual front-end origin (vite default: http://localhost:5173)
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, // allow session cookie from browser to pass through
}
app.use(cors(corsOptions));


// api's

app.get("/api/v1/user", userRoute);
app.get"/api/v1/expense", expenseRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});
