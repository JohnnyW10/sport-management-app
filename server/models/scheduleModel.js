import mongoose from 'mongoose'

const scheduleSchema = mongoose.Schema({
  name: String,
  hourFrom: String,
  hourTo: String,
  person: String,
  description: String,
  place: String,
  clubID: String,
  data: String,
});

const ScheduleSchema = mongoose.model('ScheduleSchema', scheduleSchema);

export default ScheduleSchema;