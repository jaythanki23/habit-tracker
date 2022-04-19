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


export { getHabits, createHabits };