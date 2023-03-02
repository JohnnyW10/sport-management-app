import mongoose from 'mongoose'
import UserAccount from './userModel.js';
import ScheduleSchema from './scheduleModel.js';
import MagazineSchema from './magazineModel.js';
import FinanceSchema from './financeModel.js';
import InjurySchema from './injuryModel.js';

const clubSchema = mongoose.Schema({
  name: String,
  login: String,
  password: String, 
  adres: String,
  clubID: String,
  budget: String,
  employe: { type: [UserAccount.schema], required: false },
  schedule: { type: [ScheduleSchema.schema], required: false },
  magazine: { type: [MagazineSchema.schema], required: false },
  finance: { type: [FinanceSchema.schema], required: false },
  injury: { type: [InjurySchema.schema], required: false },
});

const Club = mongoose.model('Club', clubSchema);

export default Club;