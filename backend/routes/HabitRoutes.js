import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: "Your habits" });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: "Created a habit" });
})

export { router };
