import asyncHandler from "express-async-handler";
import Habit from "../model/habitModel.js";
import Week from "../model/weekModel.js";

// @desc Get habits
// @route /api/habits
// @acces Private
const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find({ user: req.user.id });

  const [first, last] = getDays();

  const weeks = await Promise.all(habits.map(async habit => {
                                      const week = await Week.findOne({habit: habit._id, from: { $gt: first-1 }, to: { $lt: last+1 } });
                                      // console.log(week);
                                      // return week;
                                      if(week) {
                                        return week;
                                      } else {
                                        return habit;
                                      }
                                    })
                                  );  

  res.status(200).send({ habits, weeks });
});

// @desc Create habits
// @route /api/habits
// @acces Private
const createHabits = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const { name, year, day, month, date, dateTime } = req.body;
  
  // add user id in each obj of body
  const data = req.body.map(({ ...habit }) => ({ ...habit, user: req.user.id }))
  try {
    // const habit = await Habit.create({
    //   name,
    //   year,
    //   day,
    //   month,
    //   date,
    //   dateTime,
    //   user: req.user.id
    // });
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
  const habit = await Habit.findById(req.params.id, { _id: 1, name: 1 });

  if(!habit) {
    res.status(400);
    throw new Error('Habit not found');
  }

  const { day, duration, month, year } = req.body;

  const { _id, name } = habit;

  const [first, last] = getDays();

  let week = await Week.findOne({ habit: _id, name, year, month, from: { $gt: first-1 }, to: { $lt: last+1 }  })

  if(!week) {
    try {
      const newWeek = await Week.create({
        name,
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
      week = await Week.findOneAndUpdate({ habit: _id, name, year, month, from: { $gt: first-1 }, to: { $lt: last+1 } }, { $set: { [`dayDuration.${day}`]: parseInt(duration) } }); 
      res.status(200).json(week);
      
    } catch (error) {
      res.status(500)
      throw new Error('Server Error');
    }

  } else {
    try {
      week = await Week.findOneAndUpdate({ habit: _id, name, year, month, from: { $gt: first-1 }, to: { $lt: last+1 } }, { $set: { [`dayDuration.${day}`]: parseInt(duration) } }); 
      
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

  const week = await Week.findOne({ habit: req.params.id });

  await week.remove();

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