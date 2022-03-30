import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { errorHandler } from './middleware/errorMiddleware.js';
import { router as habits } from '../backend/routes/HabitRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send("Welcome to my app");
})

app.use('/habits', habits);

// Error Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
