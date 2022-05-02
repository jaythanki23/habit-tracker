import mongoose from "mongoose";

const weekSchema = mongoose.Schema({
  habit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'habit',
  },
  year: {
    type: Number
  },
  month: {
    type: String
  },
  from: {
    type: Number
  },
  to: {
    type: Number
  },
  dayDuration: {
    type: Object
  }
});

const Week = mongoose.model('week', weekSchema);

export default Week;