import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { router as habits } from '../backend/routes/HabitRoutes.js';


dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Init Middleware
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send("Welcome to my app");
// })

app.use('/dashboard', habits);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
