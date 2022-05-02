import asyncHandler from "express-async-handler";
import Habit from "../model/habitModel.js";
import Week from "../model/weekModel.js";

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

  const { name, day, month, date, dateTime } = req.body;
  
  // add user id in each obj of body
  // const data = req.body.map(({ ...habit }) => ({ ...habit, user: req.user.id }))
  try {
    const habit = await Habit.create({
      name,
      day,
      month,
      date,
      dateTime,
      user: req.user.id
    });

    res.status(200).json(habit);  
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

  const { day, duration, month, year } = req.body;

  const { _id } = habit;

  // console.log(_id);

  const [first, last] = getDays();

  let week = await Week.findOne({ habit: _id, year, month, from: { $gt: first-1 }, to: { $lt: last+1 }  })

  if(!week) {
    try {
      const newWeek = await Week.create({
        year,
        month,
        from: first,
        to: last,
        dayDuration: {
          'Mon': 0,
          'Tue': 0,
          'Wed': 0,
          'Thu': 0,
          'Fri': 0,
          'Sat': 0,
          'Sun': 0
        },
        habit: _id
      });
      // console.log(newWeek);
      res.status(200).json(newWeek);
      
    } catch (error) {
      res.status(500)
      throw new Error('Server Error');
    }

  } else {
    try {
      week = await Week.findOneAndUpdate({ habit: _id }, { $set: { [`dayDuration.${day}`]: duration } }); 
      res.status(200).json(week);
      
    } catch (error) {
      res.status(500)
      throw new Error('Server Error');
    }
  }


  // const { duration, day, month, date, dateTime } = req.body

  // const data = { $push: { duration, day, month, date, date, dateTime } }

  // const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, data);

  // res.status(200).json(updatedHabit);
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

});

const getDays = () => {
  const curr = new Date();
  
  let first = curr.getDate() - curr.getDay() + 1;
  
  let last = first + 6;
  
  let firstDay = new Date(curr.setDate(first)).toUTCString();
  
  let lastDay = new Date(curr.setDate(curr.getDate()+6)).toUTCString();
    
  firstDay = parseInt(firstDay.slice(5, 7));

  lastDay = parseInt(lastDay.slice(5, 7));  
  
  return [firstDay, lastDay];
}


export { getHabits, createHabits, updateHabit, deleteHabit };