import mongoose from "mongoose";

const habitSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Array,
    required: true 
  },
  dateTime: {
    type: Array,
  },
  day: {
    type: Array
  },
  month: {
    type: Array
  },
  date: {
    type: Array
  }
});

const Habit = mongoose.model('habit', habitSchema);

export default Habit;