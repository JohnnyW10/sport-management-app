import mongoose from 'mongoose'

const magazineSchema = mongoose.Schema({
  name: String,
  number: String,
  clubID: String,
  status: String,
  type: String,
  dateToreturn: String,
  person: String,
  cost: String,
  isBuy: Boolean,
  clubID: String,
});

const MagazineSchema = mongoose.model('MagazineSchema', magazineSchema);

export default MagazineSchema;