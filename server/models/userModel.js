import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  login: String,
  password: String,
  clubID: String,
  role: String,
  bankAccount: String,
  status: String,
  salary: String,
});

const UserAccount = mongoose.model('UserAccount', userSchema);

export default UserAccount;