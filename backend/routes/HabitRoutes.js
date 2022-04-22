import express from 'express';
import { getHabits, createHabits, updateHabit, deleteHabit } from '../controllers/habitController.js';
import protect from '../middleware/authMiddleware.js';


const router = express.Router();

router.route('/').get(protect, getHabits).post(protect, createHabits);

router.route('/:id').put(protect, updateHabit).delete(protect, deleteHabit);

// router.post('/', (req, res) => {
//   res.status(200).json({ message: "Registered a habit" });
// })

export { router };
