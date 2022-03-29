import asyncHandler from "express-async-handler";

// @desc Get habits
// @route /habits
// @acces Private
const getHabits = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Your habits" });
});

// @desc Create habits
// @route /habits
// @acces Private
const createHabits = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  console.log(req.body);

  res.status(200).json({ message: "Registered a habit" });
});


export { getHabits, createHabits };