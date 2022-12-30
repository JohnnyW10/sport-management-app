import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  login: String,
  password: String,
  id: String,
  role: String,
  birthDate: String,
  salary: String,
});

const UserAccount = mongoose.model('UserAccount', userSchema);

export default UserAccount;