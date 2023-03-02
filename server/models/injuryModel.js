import mongoose from 'mongoose'

const injurySchema = mongoose.Schema({
  type: String,
  name: String,
  howLong: Number,
  description: String,
  exercise: String,
  status: String,
  clubID: String,
});

const InjurySchema = mongoose.model('InjurySchema', injurySchema);

export default InjurySchema;