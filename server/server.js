const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json()); // allow to use content type of aplication. It parses incoming JSON requests and puts the parsed data in req.
app.use(cors());  // Calling use(cors()) will enable the express server to respond to preflight requests.

mongoose.connect("mongodb+srv://johnnyw:haslo@zks-app.0yevc.mongodb.net/?retryWrites=true&w=majority", ({
  useNewUrlParser: true,
  useUnifiedTopology: true
}))
  .then(() => console.log('connected to mongodb'))
  .catch(console.error)

const User = require('./models/User');

app.get('/users', async (req, res) => {
  const users = await User.find();

  res.json(users)
})

app.post('/users/new', async(req, res) => {
  const user = new User({
    login: req.body.login,
    password: req.body.password,
    mail: req.body.mail,
    role: req.body.role
  });

  user.save();

  res.json();
}) 

app.delete('/users/delete/:id', async(req, res) => {
  const result = await User.findByIdAndDelete(req.params.id)

  res.json(result);
})


app.listen(5000, () => {console.log("server started on port 5000")});