import mongoose from "mongoose";

const habitSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true 
  },
  dateTime: {
    type: String,
  },
  day: {
    type: String
  },
  month: {
    type: String
  },
  date: {
    type: String
  }
});

const Habit = mongoose.model('habit', habitSchema);

export default Habit;