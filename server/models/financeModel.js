import mongoose from 'mongoose'

const financeSchema = mongoose.Schema({
  name: String,
  type: String,
  cost: Number,
  describe: String,
  endDate: String,
  status: String,
  clubID: String,
});

const FinanceSchema = mongoose.model('FinanceSchema', financeSchema);

export default FinanceSchema;