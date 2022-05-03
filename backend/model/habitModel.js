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
  dateTime: {
    type: Date,
  },
  year: {
    type: Number
  },
  day: {
    type: String
  },
  month: {
    type: String
  },
  date: {
    type: Number
  }
});

const Habit = mongoose.model('habit', habitSchema);

export default Habit;