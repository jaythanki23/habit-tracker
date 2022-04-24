import asyncHandler from "express-async-handler";
import Habit from "../model/habitModel.js";

// @desc Get habits
// @route /api/habits
// @acces Private
const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find({ user: req.user.id });

  res.status(200).json(habits);
});

// @desc Create habits
// @route /api/habits
// @acces Private
const createHabits = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  // const { name, duration, dateTime, day, month, date } = req.body;
  
  // const habit = await Habit.create({
  //   name,
  //   duration,
  //   dateTime,
  //   day,
  //   month,
  //   date,
  //   user: req.user.id
  // });

  // add user id in each obj of body
  const data = req.body.map(({ ...habit }) => ({ ...habit, user: req.user.id }))
  try {
    const habits = await Habit.insertMany(data);

    res.status(200).json(habits);  
  } catch (error) {
    res.status(500)
    throw new Error('Server Error');
  }
  
});

// @desc Update Habit
// @route /api/habits/:id
// @access Private
const updateHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  if(!habit) {
    res.status(400);
    throw new Error('Habit not found');
  }

  const { duration, day, month, date, dateTime } = req.body

  const data = { $push: { duration, day, month, date, date, dateTime } }

  const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, data);

  res.status(200).json(updatedHabit);
});

// @desc Delete Habit
// @route /api/habits/:id
// @access Private
const deleteHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  if(!habit) {
    res.status(400);
    throw new Error('Habit not found');
  }

  await habit.remove();

  res.status(200).json({ id: req.params.id });

})


export { getHabits, createHabits, updateHabit, deleteHabit };