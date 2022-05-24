import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';
import { errorHandler } from './middleware/errorMiddleware.js';
import { router as habits } from './routes/habitsRoutes.js';
import { router as users } from './routes/userRoutes.js';
import { connectDB } from './config/db.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.send("Welcome to my app");
// })

app.use('/api/habits', habits);
app.use('/api/users', users);

// Serve frontend
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  const __dirname = dirname(fileURLToPath(import.meta.url));
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'habit-tracker', 'client', 'build', 'index.html')));
}

// Error Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
