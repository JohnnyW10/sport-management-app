// module is to knwo you your database will be created 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", UserSchema)

module.exports = User;