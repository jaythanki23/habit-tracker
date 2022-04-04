import express from 'express';
import { getHabits, createHabits } from '../controllers/habitController.js';
import protect from '../middleware/authMiddleware.js';


const router = express.Router();

router.route('/').get(protect, getHabits).post(protect, createHabits);

// router.post('/', (req, res) => {
//   res.status(200).json({ message: "Registered a habit" });
// })

export { router };
