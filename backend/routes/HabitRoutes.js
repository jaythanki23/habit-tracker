import express from 'express';
import { getHabits, createHabits } from '../controllers/habitController.js';


const router = express.Router();

router.route('/').get(getHabits).post(createHabits);

// router.post('/', (req, res) => {
//   res.status(200).json({ message: "Registered a habit" });
// })

export { router };
